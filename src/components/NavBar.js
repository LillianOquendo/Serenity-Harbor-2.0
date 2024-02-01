import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDoubleRightIcon,
  PencilSquareIcon,
  InformationCircleIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";


const colors = {
  blue: "bg-blue-50 text-blue-500",
  orange: "bg-orange-50 text-orange-500",
  green: "bg-green-50 text-green-500",
  black: "bg-blue-gray-50 text-blue-gray-500",
  purple: "bg-purple-50 text-purple-500",
  teal: "bg-teal-50 text-teal-500",
  cyan: "bg-cyan-50 text-cyan-500",
  pink: "bg-pink-50 text-pink-500",
  yellow: "bg-yellow-50 text-yellow-500",

};

const navListMenuItems = [
  {
    color: "blue",
    icon: ChevronDoubleRightIcon,
    title: "Financial Abuse",
    description: "Learn about what Financial Abuse is",
    href : "/financial_abuse"
  },
  {
    color: "orange",
    icon: ChevronDoubleRightIcon,
    title: "Emotional Abuse",
    description: "Learn about what Emotional Abuse is",
    href: "/emotional_abuse"
  },
  {
    color: "green",
    icon: ChevronDoubleRightIcon,
    title: "Digital Abuse",
    href: "/digital_abuse",
    description: "Learn what Digital Abuse is.",
  },
  {
    color: "yellow",
    icon: ChevronDoubleRightIcon,
    title: "Sexual Abuse",
    description: "Learn what Sexual Abuse is.",
    href: "/sexual_abuse"
  },
  {
    color: "purple",
    icon: ChevronDoubleRightIcon,
    title: "Physical Abuse",
    description: "Learn what Physical Abuse is.",
    href: "/physical_abuse"
  },
  {
    color: "teal",
    icon: ChevronDoubleRightIcon,
    title: "Stalking",
    description: "Learn what Stalking is.",
    href:"/stalking"
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(
    ({ icon, title, description, color, href }, key) => (
      <a href={href} key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className={`rounded-lg p-5 ${colors[color]}`}>
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="black"
              className="flex items-center text-sm"
            >
              {title}
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-normal">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <InformationCircleIcon className="h-[18px] w-[18px]" />
              Types of Abuse
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDoubleRightIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-4 gap-y-2">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <NavListMenu />
      <Typography
        as="a"
        href="safety_plan"
        variant="small"
        color="black"
        className="font-normal"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <PencilSquareIcon className="h-[18px] w-[18px]" />
          Safety Plan Generator
        </ListItem>
      </Typography>

      <Typography
        as="a"
        href="/agencies"
        variant="small"
        color="black"
        className="font-normal"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <MagnifyingGlassIcon className="h-[18px] w-[18px]" />
          Find Help
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="/about_us"
        variant="small"
        color="black"
        className="font-normal"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <QuestionMarkCircleIcon className="h-[18px] w-[18px]" />
          About Us
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="/contact"
        variant="small"
        color="black"
        className="font-normal"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <EnvelopeIcon className="h-[18px] w-[18px]" />
          Contact
        </ListItem>
      </Typography>
    </List>
  );
}

export default function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2">
      <div className="flex items-center justify-between text-black">
        <Typography
          as="a"
          href="/"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
          Serenity Harbor
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>

        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <ChevronDoubleRightIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <ChevronDoubleRightIcon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
