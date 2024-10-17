import { Accordion, AccordionItem } from "@nextui-org/accordion";
import React from "react";

class AccordionContentItem {
  constructor(
    public Title: string = "",
    public Text: React.FC = (): React.ReactNode => <span></span>
  ) {}
}

const accordionContent = [
  new AccordionContentItem("Copyright Notice", () => {
    return (
      <span>
        <p>
          <strong>Ownership of copyright -</strong>
        </p>
        <br />
        <p>
          The copyright in this website and the material on this website
          (including without limitation the text, computer code, artwork,
          photographs, images, music, audio material, video material and
          audio-visual material on this website) is owned by GPP Recruitment
          Limited.
        </p>
        <br />
        <p>
          GPP Recruitment Limited grants to you a worldwide non-exclusive
          royalty-free revocable license to:
        </p>
        <br />
        <ol>
          <li>
            <p>
              1. View this website and the material on this website on a
              computer or mobile device via a web browser
            </p>
          </li>
          <li>
            <p>
              2. Copy and store this website and the material on this website in
              your web browser cache memory
            </p>
          </li>
          <li>
            <p>
              3. Print pages from this website for your own [personal and
              non-commercial] use.
            </p>
          </li>
        </ol>
        <br />
        <p>
          GPP Recruitment Limited does not grant you any other rights in
          relation to this website or the material on this website. In other
          words, all other rights are reserved.For the avoidance of doubt, you
          must not adapt, edit, change, transform, publish, republish,
          distribute, redistribute, broadcast, rebroadcast or show or play in
          public this website or the material on this website (in any form or
          media) without GPP Recruitment Limited prior written permission.
        </p>
        <br />
        <p>
          <strong>Data mining -</strong>
        </p>
        <br />
        <p>
          The automated and/or systematic collection of data from this website
          is prohibited.PermissionsYou may request permission to use the
          copyright materials on this website by writing to&nbsp;
          <a href="mailto:anthonyp@gpprecruitment.com">
            anthonyp@gpprecruitment.com
          </a>
        </p>
        <br />
        <br />
        <p>
          <strong>Enforcement of copyright -</strong>
        </p>
        <br />
        <p>
          GPP Recruitment Limited takes the protection of its copyright very
          seriously.If GPP Recruitment Limited discovers that you have used its
          copyright materials in contravention of the license above, GPP
          Recruitment Limited may bring legal proceedings against you seeking
          monetary damages and an injunction to stop you using those materials.
          You could also be ordered to pay legal costs.If you become aware of
          any use of GPP Recruitment Limited copyright materials that
          contravenes or may contravene the license above, please report this by
          email to anthonyp@gpprecruitment.comInfringing materialIf you become
          aware of any material on the website that you believe infringes your
          or any other person’s copyright, please report this by email to&nbsp;
          <a href="mailto:anthonyp@gpprecruitment.com">
            anthonyp@gpprecruitment.com
          </a>
        </p>
        <br />
        <p>
          <strong>Credit -</strong>
        </p>
        <br />
        This document was created using a Contractology template available at 
        <a href="http://www.contractology.com."></a>
        http://www.contractology.com.
      </span>
    );
  }),
  new AccordionContentItem("Cookie Policy"),
  new AccordionContentItem("Privacy Policy"),
];

export default function PrivacyPage() {
  return (
    <div className="flex py-[7%] px-[15%]">
      <Accordion>
        {accordionContent.map((val, idx) => {
          return (
            <AccordionItem
              key={idx.toString()}
              aria-label={val.Title}
              title={val.Title}
            >
              <div className="p-5">{val.Text({})}</div>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
