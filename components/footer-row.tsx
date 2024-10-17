import Link from "next/link";
import { useRouter } from "next/navigation";

class FooterRowItem {
  constructor(
    public Text: string,
    public Href: string = "#",
    public Target: string = ""
  ) {}
}

const footerRowItems = [
  new FooterRowItem("Privacy Policy", undefined, "/privacy"),
  new FooterRowItem("About Us", undefined, "/about"),
  new FooterRowItem("Contact Us", undefined, "/contact"),
];

export const FooterRow = () => {
  const router = useRouter();
  return footerRowItems.map((item, idx) => {
    return (
      <Link
        className="text-xl"
        href={item.Href}
        key={idx.toString()}
        onClick={(e) => {
          e.preventDefault();
          router.push(item.Target);
        }}
      >
        <span className="font-semibold">{item.Text}</span>
      </Link>
    );
  });
};
