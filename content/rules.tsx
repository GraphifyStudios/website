import NextLink, { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";
import { cn } from "~/lib/utils";

interface Rule {
  title: string;
  description: string | JSX.Element;
}

export const rules: Rule[] = [
  {
    title: "Follow YouTube's rules.",
    description: (
      <>
        We follow the{" "}
        <Link
          href="https://www.youtube.com/static?template=terms"
          target="_blank"
        >
          YouTube TOS
        </Link>{" "}
        and{" "}
        <Link
          href="https://www.youtube.com/howyoutubeworks/policies/community-guidelines/"
          target="_blank"
        >
          Community Guidelines
        </Link>
        , so it just makes sense for you to follow them too.
      </>
    ),
  },
  {
    title: "Don't spam.",
    description:
      "This makes chat very hard to moderate and read. The only time you're allowed to break this rule is when moderators or the channel owner specify otherwise (such as during a passing, etc.).",
  },
  {
    title: "Respect all participants.",
    description:
      "This includes offending people personally, being racist, etc. We want to keep our streams as clean as possible.",
  },
  {
    title: "Only speak in English.",
    description:
      "Most of our moderators and participants only speak English, so if you speak another language, it's going to be hard to moderate what you say.",
  },
  {
    title: "Don't promote.",
    description:
      "This includes promoting your or someone else's video, short, livestream, etc.",
  },
  {
    title: "Don't send links.",
    description: (
      <>
        This includes sending links to other websites (like Discord, Twitter/X,
        Instagram, other live statistics websites such as{" "}
        <Link href="https://livecounts.io" target="_blank">
          livecounts.io
        </Link>
        , etc.) and advertising other platforms.
      </>
    ),
  },
  {
    title: "No slurs.",
    description: "This includes saying sexual, racial, or other slurs.",
  },
  {
    title: "Don't bypass punishments.",
    description:
      "Such as ttalking on an alt account when you get muted, or banned.",
  },
  {
    title: "Don't talk about drama.",
    description:
      "We don't want to spread or start drama in our streams. Drama shouldn't take place in our streams.",
  },
  {
    title: "No XP/Points farming.",
    description:
      "This is because XP/Points farming gives you easy XP/Points, which we do not want. XP and Points are meant to symbolize the most active viewers of our streams.",
  },
  {
    title: "No impersonation.",
    description:
      "This is because it gives people the false impression that a famous figure is on our streams.",
  },
  {
    title: "If you see anyone breaking these rules, tell us immediately.",
    description:
      "We want to keep our streams as a welcoming space for all of our participants, so if you see someone breaking these rules, tell a moderator immediately.",
  },
];

function Link(props: AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps) {
  return (
    <NextLink
      {...props}
      className={cn(
        "text-primary hover:opacity-50 transition-all",
        props.className
      )}
    />
  );
}
