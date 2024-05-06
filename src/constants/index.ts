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
    id: "blogs",
    title: "Blogs",
  },
  {
    id: "contact",
    title: "Contact Us",
  },
];

export const expandableProps: ExpandableProps[] = [
  {
    title: "How it works",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen",
    hidden: true,
  },
  {
    title: "How deposit works",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen",
    hidden: true,
  },
  {
    title: "Withdrawl Process",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen",
    hidden: true,
  },
  {
    title: "Pointing System",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen",
    hidden: true,
  },
];
