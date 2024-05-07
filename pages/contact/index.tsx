import ContactForm from "@components/contact-form";

export default function ContactPage() {
  return <ContactForm shouldDisableButton={true} />;
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
