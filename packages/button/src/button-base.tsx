import { useForkRef, useEventCallback } from "@md3-ui/hooks"
import {
  Global,
  OwnerStateProps,
  styled,
  StyleSheet,
  SxProps,
  useTheme,
  useThemeProps,
} from "@md3-ui/system"
import { splitProps } from "@md3-ui/utils"
import * as React from "react"
import {
  ButtonProps,
  Platform,
  Pressable as RNPressable,
  PressableProps as RNPressableProps,
  StyleProp,
  View as RNView,
  ViewStyle as RNViewStyle,
} from "react-native"

export type ButtonBaseProps = Omit<
  RNPressableProps,
  "children" | "disabled" | "style"
> & {
  /** @default false */
  centerRipple?: boolean
  children?: React.ReactNode
  /** @default false */
  disabled?: boolean
  /** @default false */
  disableRipple?: boolean
  focusColor?: string
  /** @default 0.12 */
  focusOpacity?: string
  hoverColor?: string
  /** @default 0.08 */
  hoverOpacity?: number
  pressedColor?: string
  /** @default 0.12 */
  pressedOpacity?: number
  rippleColor?: string
  style?: StyleProp<RNViewStyle>
  styles?: {
    root?: RNViewStyle
    container?: RNViewStyle
  }
  sx?: SxProps
}

const ButtonBaseRoot = styled(RNPressable, {
  name: "ButtonBase",
  slot: "Root",
})<OwnerStateProps<Pick<ButtonProps, "disabled">>>(
  ({ ownerState }) =>
    Platform.OS === "web" && {
      cursor: ownerState.disabled ? "default" : "pointer",
      outlineWidth: 0,
      overflow: "hidden",
      transition: "box-shadow 200ms linear",
      userSelect: "none",
    },
)

const ButtonBaseContainer = styled(RNView, {
  name: "ButtonBase",
  slot: "Container",
})({
  backgroundColor: "rgba(255, 255, 255, 0)",
  overflow: "hidden",
})

export const ButtonBase = React.forwardRef<RNView, ButtonBaseProps>(
  (inProps, ref) => {
    const {
      centerRipple = false,
      children,
      disabled = false,
      disableRipple = false,
      focusColor: focusColorProp,
      focusOpacity = 0.12,
      hoverColor: hoverColorProp,
      hoverOpacity = 0.08,
      onKeyDown,
      onKeyUp,
      onPress,
      pressedColor: pressedColorProp,
      pressedOpacity = 0.12,
      rippleColor,
      style,
      styles,
      ...props
    } = useThemeProps({ name: "ButtonBase", props: inProps })

    const theme = useTheme()

    const rootRef = React.useRef<RNView>(null)
    const handleRef = useForkRef(rootRef, ref)

    const [ripples, setRipples] = React.useState<
      { id: number; ripple: React.ReactNode }[]
    >([])

    const [{ backgroundColor = null, ...containerStyle } = {}] = splitProps(
      StyleSheet.flatten(style),
      [
        "backgroundColor",
        "borderRadius",
        "bottom",
        "height",
        "left",
        "margin",
        "marginBottom",
        "marginEnd",
        "marginHorizontal",
        "marginLeft",
        "marginRight",
        "marginStart",
        "marginTop",
        "marginVertical",
        "position",
        "right",
        "top",
        "width",
      ],
    )

    const hoverColor = rippleColor ?? hoverColorProp ?? theme.color.background
    const focusColor = rippleColor ?? focusColorProp ?? hoverColor
    const pressedColor =
      rippleColor ?? pressedColorProp ?? theme.color.background

    const underlayColor =
      // When button has no background color, simply use `rippleColor` as is
      backgroundColor == null
        ? theme.utils.rgba(pressedColor, pressedOpacity)
        : // Otherwise we mix the `rippleColor` with the background color
          theme.utils.mix(
            pressedOpacity,
            pressedColor,
            backgroundColor.toString(),
          )

    const removeRipple = (rippleID: number) => () => {
      setRipples((prevRipples) => prevRipples.filter((r) => r.id !== rippleID))
    }

    const appendRipple = React.useCallback(
      (event: TouchEvent | MouseEvent | {} = {}) => {
        const currentRef = rootRef.current as HTMLDivElement | null

        if (disabled || disableRipple || currentRef == null) {
          return
        }

        const { width, height, left, top } = currentRef.getBoundingClientRect()

        // Get the size of the ripple
        let rippleX: number
        let rippleY: number
        let rippleSize: number

        if (
          centerRipple ||
          (!("clientX" in event) && !("touches" in event)) ||
          ("clientX" in event && event?.clientX === 0 && event?.clientY === 0)
        ) {
          rippleX = Math.round(width / 2)
          rippleY = Math.round(height / 2)
        } else {
          const { clientX, clientY } =
            "touches" in event ? event.touches[0] : event
          rippleX = Math.round(clientX - left)
          rippleY = Math.round(clientY - top)
        }

        if (centerRipple) {
          rippleSize = Math.sqrt((2 * width ** 2 + height ** 2) / 3)
        } else {
          const sizeX =
            Math.max(Math.abs(currentRef.clientWidth - rippleX), rippleX) * 2 +
            2
          const sizeY =
            Math.max(Math.abs(currentRef.clientHeight - rippleY), rippleY) * 2 +
            2
          rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2)
        }

        const rippleID =
          ripples.length === 0 ? 1 : ripples[ripples.length - 1].id + 1

        const ripple = (
          <span
            key={rippleID}
            style={{
              animation: "button-base-animation 550ms ease-in",
              backgroundColor: theme.utils.rgba(
                pressedColor,
                pressedOpacity - hoverOpacity,
              ),
              borderRadius: "50%",
              height: rippleSize,
              left: -(rippleSize / 2) + rippleX,
              pointerEvents: "none",
              position: "absolute",
              top: -(rippleSize / 2) + rippleY,
              width: rippleSize,
              zIndex: -1,
            }}
            onAnimationEnd={removeRipple(rippleID)}
          />
        )

        setRipples((prevRipples) => [...prevRipples, { id: rippleID, ripple }])
      },
      [
        rootRef,
        disabled,
        disableRipple,
        centerRipple,
        ripples,
        theme,
        pressedColor,
        pressedOpacity,
        hoverOpacity,
      ],
    )

    const isNonNativeButton = () => {
      const buttonEl = rootRef.current as HTMLElement | null
      return (
        buttonEl?.tagName !== "BUTTON" &&
        !(buttonEl?.tagName === "A" && (buttonEl as HTMLAnchorElement).href)
      )
    }

    const handleKeyDown = useEventCallback((event: React.KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        appendRipple()
      }

      if (
        event.target === event.currentTarget &&
        isNonNativeButton() &&
        event.key === " "
      ) {
        event.preventDefault()
      }

      onKeyDown?.(event)

      // Keyboard accessibility for non interactive elements
      if (
        event.target === event.currentTarget &&
        isNonNativeButton() &&
        event.key === "Enter" &&
        !disabled
      ) {
        event.preventDefault()
        onPress?.(event as any)
      }
    })

    const handleKeyUp = useEventCallback((event: React.KeyboardEvent) => {
      onKeyUp?.(event)

      // Keyboard accessibility for non interactive elements
      if (
        event.target === event.currentTarget &&
        isNonNativeButton() &&
        event.key === " " &&
        !event.defaultPrevented
      ) {
        onPress?.(event as any)
      }
    })

    React.useEffect(() => {
      const currentRef = rootRef.current as HTMLDivElement | null

      if (Platform.OS === "web" && currentRef != null) {
        currentRef.addEventListener("mousedown", appendRipple)
        currentRef.addEventListener("touchstart", appendRipple)

        return () => {
          currentRef.removeEventListener("mousedown", appendRipple)
          currentRef.removeEventListener("touchend", appendRipple)
        }
      }

      return () => {}
    }, [appendRipple, handleKeyDown, rootRef])

    const ownerState = {
      disabled,
    }

    const button = (
      <>
        {Platform.OS === "web" && (
          <Global
            styles={{
              "@keyframes button-base-animation": {
                from: {
                  opacity: 1,
                  transform: "scale(0)",
                },
                to: {
                  opacity: 0,
                  transform: "scale(1)",
                },
              },
            }}
          />
        )}
        <ButtonBaseRoot
          ref={handleRef}
          accessibilityRole="button"
          accessibilityState={{ disabled: disabled || undefined }}
          android_ripple={
            disableRipple
              ? {}
              : {
                  borderless: true,
                  color: pressedColor,
                }
          }
          disabled={disabled}
          ownerState={ownerState}
          pointerEvents={disabled ? "none" : undefined}
          {...(Platform.OS === "web" && {
            style: [styles?.root, style],
          })}
          {...(Platform.OS === "android" && {
            // For Android we need a wrapping View to cut off the ripple effect.
            // Because of this View and when the button should have
            // `position: absolute`, we need to apply it to the wrapper View and
            // override it here to have `position: relative` with 0px inset.
            style: [
              styles?.root,
              style,
              {
                bottom: 0,
                left: 0,
                marginBottom: 0,
                marginEnd: 0,
                marginLeft: 0,
                marginRight: 0,
                marginStart: 0,
                marginTop: 0,
                position: "relative",
                right: 0,
                top: 0,
              },
            ],
          })}
          {...(Platform.OS === "ios" && {
            style: ({ pressed }) => [
              styles?.root,
              style,
              pressed && !disableRipple && { backgroundColor: underlayColor },
            ],
          })}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          onPress={onPress}
          {...props}
        >
          {({ hovered, focused }) => (
            <>
              {React.Children.only(children)}
              {Platform.OS === "web" && (
                <span
                  style={{
                    backgroundColor: focused ? focusColor : hoverColor,
                    bottom: 0,
                    left: 0,
                    opacity: focused
                      ? focusOpacity
                      : hovered
                      ? hoverOpacity
                      : 0,
                    position: "absolute",
                    right: 0,
                    top: 0,
                    transition: "opacity 200ms linear",
                    zIndex: -1,
                  }}
                />
              )}
              {ripples.map(({ ripple }) => ripple)}
            </>
          )}
        </ButtonBaseRoot>
      </>
    )

    return Platform.OS === "android" ? (
      <ButtonBaseContainer style={[containerStyle, styles?.container]}>
        {button}
      </ButtonBaseContainer>
    ) : (
      button
    )
  },
)
