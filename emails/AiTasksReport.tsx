import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

import { Markdown } from "@react-email/markdown";

import * as React from "react";

interface VercelInviteUserEmailProps {
  username?: string;
  avatar?: string | null;
  userLanguage: string;
  data: string;
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

export const AiTasksReportEmail = ({
  username,
  avatar,
  data,
}: VercelInviteUserEmailProps) => {
  const previewText = `Password reset from ${process.env.NEXT_PUBLIC_APP_NAME}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src={avatar || `${baseUrl}/images/nouser.png`}
                width="50"
                height="50"
                alt="User Avatar"
                className="my-0 mx-auto rounded-full"
              />
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Ai assistant tasks report for: <strong>{username}</strong>
            </Heading>
            <Markdown>{data}</Markdown>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default AiTasksReportEmail;
