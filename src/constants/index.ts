interface NavLink {
  id: string;
  title: string;
}

export interface ExpandableProps {
  title: String;
  content: String;
  hidden: boolean;
}

export const navLinks: NavLink[] = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "content",
    title: "Why A1",
  },
  {
    id: "faq",
    title: "FAQ",
  },
  {
    id: "contact",
    title: "Contact Us",
  },
];

export const expandableProps: ExpandableProps[] = [
  {
    title: "A1 Sports ?",
    content:
      "At A1 Sports, we've made a new way for fans to enjoy sports. Instead of just watching, you can now invest in your favorite players using our special trading platform. In a mission to end sports gambling and bring financial literacy to the masses via sports trading.",
    hidden: true,
  },
  {
    title: "How A1 Sports works",
    content:
      "It's not like the usual fantasy sports apps. A1 Sports is more advanced. It's made for people who love sports and want to invest in them too. You can think of it like buying and selling stocks, but instead of companies, you're dealing with athletes. You can buy shares in athletes and then sell them later based on how well they're performing. We help you make smart choices by giving you lots of useful information about players and teams. Instead of guessing we want you to make informed decisions based on your knowledge of sports and the data we provide. Whether you're backing a rising star or spreading your investments, every move you make on A1 Sports matters.",
    hidden: true,
  },
  {
    title: "What's New With us?",
    content:
      "We're changing the game in sports investing. A1 Sports offers a unique trading experience, bringing together sports fans and financial opportunities. With us, fans can become investors and influence the future of sports through their choices.",
    hidden: true,
  },
  {
    title: "Our Vision",
    content:
      "We're dedicated to supporting sports talent from the ground up. We imagine a future where young athletes get a boost from our platform, helping them reach the top. At A1 Sports, we're not just trading; we're investing in tomorrow's sports stars.",
    hidden: true,
  },
];
