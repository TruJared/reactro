export interface NavigationProps {
  title: string;
  links: {
    name: string;
    url: string;
  }[];
  logoSrc?: string;
}

export function Navigation(props: NavigationProps) {
  const { title, links, logoSrc } = props;

  return null;

}
