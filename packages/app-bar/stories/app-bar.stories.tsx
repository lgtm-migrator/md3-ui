import { IconButton } from "@md3-ui/button"
import { Text } from "@md3-ui/layout"
import { Meta, Story } from "@storybook/react"
import { Attachment } from "../../icons/src/attachment"
import { CalendarToday } from "../../icons/src/calendar-today"
import { Menu } from "../../icons/src/menu"
import { MoreVert } from "../../icons/src/more-vert"
import { Person } from "../../icons/src/person"
import { AppBar, AppBarProps, Toolbar } from "../src"

export default {
  title: "Components/Top app bar",
  component: AppBar,
  subcomponents: { Toolbar },
} as Meta<AppBarProps>

export const CenterAligned: Story<AppBarProps> = (args) => (
  <AppBar {...args}>
    <Toolbar>
      <IconButton
        accessibilityLabel="menu"
        edge="start"
        sx={{ marginEnd: 1.5 }}
      >
        <Menu />
      </IconButton>
      <Text variant="title-large" sx={{ flexGrow: 1, textAlign: "center" }}>
        Title Large
      </Text>
      <IconButton
        accessibilityLabel="profile"
        edge="end"
        sx={{ marginStart: 1.5 }}
      >
        <Person />
      </IconButton>
    </Toolbar>
  </AppBar>
)

export const Small: Story<AppBarProps> = (args) => (
  <AppBar {...args}>
    <Toolbar>
      <IconButton
        accessibilityLabel="menu"
        edge="start"
        sx={{ marginEnd: 0.5 }}
      >
        <Menu />
      </IconButton>
      <Text variant="title-large" sx={{ flexGrow: 1 }}>
        Title Large
      </Text>
      <IconButton accessibilityLabel="attachment">
        <Attachment />
      </IconButton>
      <IconButton accessibilityLabel="calendar">
        <CalendarToday />
      </IconButton>
      <IconButton accessibilityLabel="profile" edge="end">
        <MoreVert />
      </IconButton>
    </Toolbar>
  </AppBar>
)

export const Medium: Story<AppBarProps> = (args) => (
  <AppBar {...args}>
    <Toolbar
      sx={{
        alignItems: "flex-start",
        paddingTop: 1,
        paddingBottom: 2,
        minHeight: 112,
      }}
    >
      <IconButton accessibilityLabel="menu" edge="start">
        <Menu />
      </IconButton>
      <Text
        variant="headline-small"
        sx={{ alignSelf: "flex-end", marginStart: -4.5, flexGrow: 1 }}
      >
        Headline Small
      </Text>
      <IconButton accessibilityLabel="attachment">
        <Attachment />
      </IconButton>
      <IconButton accessibilityLabel="calendar">
        <CalendarToday />
      </IconButton>
      <IconButton accessibilityLabel="profile" edge="end">
        <MoreVert />
      </IconButton>
    </Toolbar>
  </AppBar>
)

export const Large: Story<AppBarProps> = (args) => (
  <AppBar {...args}>
    <Toolbar
      sx={{
        alignItems: "flex-start",
        paddingTop: 1,
        paddingBottom: 2,
        minHeight: 152,
      }}
    >
      <IconButton accessibilityLabel="menu" edge="start">
        <Menu />
      </IconButton>
      <Text
        variant="headline-medium"
        sx={{ alignSelf: "flex-end", marginStart: -4.5, flexGrow: 1 }}
      >
        Headline Medium
      </Text>
      <IconButton accessibilityLabel="attachment">
        <Attachment />
      </IconButton>
      <IconButton accessibilityLabel="calendar">
        <CalendarToday />
      </IconButton>
      <IconButton accessibilityLabel="profile" edge="end">
        <MoreVert />
      </IconButton>
    </Toolbar>
  </AppBar>
)
