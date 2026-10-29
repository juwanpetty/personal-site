"use client";

import { PageContainer } from "@/components/page-container";
import { useTailwindBreakpoint } from "@/hooks/use-tailwind-breakpoint";
import { cn } from "@/lib/cn";
import {
  IconBookOpen5Fill18,
  IconCircleUserFill18,
  IconGamepadFill18,
  IconHeadphonesFill18,
  IconMediaPlayFill18,
} from "nucleo-ui-fill-18";
import {
  IconDotsOutline18,
  IconMagnifierOutline18,
} from "nucleo-ui-outline-18";

export default function Page() {
  const isMdBreakpoint = useTailwindBreakpoint("md");

  return (
    <PageContainer>
      <header
        style={
          { "--avatar-size": "5rem", "--pt": "10rem" } as React.CSSProperties
        }
        className={cn(
          "relative isolate flex items-center justify-center",
          "px-4 pt-(--pt) pb-8 sm:px-6",
        )}
      >
        <section className="z-10 w-full space-y-4">
          <div className="flex items-end justify-between">
            <div className="bg-gray-1 border-gray-4 aspect-square w-(--avatar-size) rounded-full border" />

            <div className="flex items-center gap-2 pb-2 sm:gap-4">
              <button className="flex size-8 cursor-pointer items-center justify-center rounded-full p-2">
                <IconDotsOutline18 className="size-4" />
                <span className="sr-only">Settings</span>
              </button>

              <button className="flex size-8 cursor-pointer items-center justify-center rounded-full p-2">
                <IconMagnifierOutline18 className="size-4" />
                <span className="sr-only">Search</span>
              </button>

              <button className="bg-gray-12 flex h-8 cursor-pointer items-center gap-0.5 rounded-full px-2.5 py-1.5 text-sm font-medium text-white">
                <span className="px-1">CTA Button</span>
              </button>
            </div>
          </div>

          <section className="space-y-1">
            <h1 className="text-gray-12 text-lg font-semibold">Profile Name</h1>

            <div className="text-gray-11 max-w-xl text-base/relaxed text-pretty">
              Tagline goes here
            </div>
          </section>
        </section>

        <div
          className={cn(
            "rounded-none",
            "absolute top-0 left-0 z-0 w-full overflow-hidden",
            "bg-gray-4 sm:rounded-2xl",
            "h-[calc(var(--pt)+var(--avatar-size)*0.33)]",
          )}
        />
      </header>

      <div className="px-4 sm:px-6">
        <div className="space-y-16">
          <section className="flex w-full flex-col gap-4">
            <div className="flex items-center gap-x-2.5">
              <div className="flex shrink-0 items-center gap-x-2">
                <IconCircleUserFill18 className="text-gray-12 size-5" />
                <h2 className="text-gray-12 text-base font-[550]">About</h2>
              </div>

              <div
                aria-hidden="true"
                className="border-gray-6 w-full border-t border-dashed"
              />
            </div>

            <div className="text-gray-11 max-w-3xl space-y-4 text-base/relaxed">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                laborum unde vel iusto nam modi, voluptates iste illo odit
                doloremque alias natus laudantium dolore eius velit veniam
                dolorum quod fuga.
              </p>
            </div>
          </section>

          <section className="flex w-full flex-col gap-4">
            <div className="flex items-center gap-x-2.5">
              <div className="flex shrink-0 items-center gap-x-2">
                <IconBookOpen5Fill18 className="text-gray-12 size-5" />
                <h2 className="text-gray-12 text-base font-[550]">
                  Currently reading
                </h2>
              </div>

              <div
                aria-hidden="true"
                className="border-gray-6 w-full border-t border-dashed"
              />
            </div>

            <div className="text-gray-11 max-w-3xl space-y-4 text-base/relaxed">
              <div className="h-50 w-full rounded-2xl">
                <div className="flex h-50 gap-x-4">
                  <div className="bg-gray-1 relative aspect-3/4 h-full rounded-lg">
                    <span className="absolute inset-0 h-full w-full object-cover" />
                    <div className="pointer-events-none absolute inset-0 rounded-lg inset-ring-1 inset-ring-black/10 dark:inset-ring-white/10" />
                  </div>

                  <div className="grow">
                    <p className="text-gray-12 text-base font-medium">
                      In a Grove
                    </p>
                    <p className="text-sm">Ryūnosuke Akutagawa</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="flex w-full flex-col gap-4">
            <div className="flex items-center gap-x-2.5">
              <div className="flex shrink-0 items-center gap-x-2">
                <IconGamepadFill18 className="text-gray-12 size-5" />
                <h2 className="text-gray-12 text-base font-[550]">
                  Currently playing
                </h2>
              </div>

              <div
                aria-hidden="true"
                className="border-gray-6 w-full border-t border-dashed"
              />
            </div>

            <div className="text-gray-11 max-w-3xl space-y-4 text-base/relaxed">
              <div className="bg-gray-3 h-50 w-full rounded-2xl" />
            </div>
          </section>

          <section className="flex w-full flex-col gap-4">
            <div className="flex items-center gap-x-2.5">
              <div className="flex shrink-0 items-center gap-x-2">
                <IconHeadphonesFill18 className="text-gray-12 size-5" />
                <h2 className="text-gray-12 text-base font-[550]">
                  Currently listening to
                </h2>
              </div>

              <div
                aria-hidden="true"
                className="border-gray-6 w-full border-t border-dashed"
              />
            </div>

            <div className="text-gray-11 max-w-3xl space-y-4 text-base/relaxed">
              <div className="flex h-50 w-full items-center rounded-2xl">
                <VinylPlayer size={isMdBreakpoint ? 144 : 88} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </PageContainer>
  );
}

interface VinylPlayerProps {
  size?: number;
  coverUrl?: string;
  // audioSrc?: string;
  // labelColor?: string;
  // sleeveColor?: string;
  // rpm?: number;
}

function VinylPlayer({ size = 200, coverUrl = "" }: VinylPlayerProps) {
  return (
    <div className="flex w-full items-center gap-x-4 pr-4">
      <div className="w-44.5">
        <div
          className="relative isolate size-(--vinyl-size)"
          style={{ "--vinyl-size": `${size}px` } as React.CSSProperties}
        >
          {/* Cover */}
          <div className="bg-gray-1 absolute top-0 left-0 z-2 h-full w-full overflow-hidden rounded-lg">
            <span className="absolute inset-0 h-full w-full object-cover" />
            <div className="pointer-events-none absolute inset-0 rounded-lg inset-ring-1 inset-ring-black/10 dark:inset-ring-white/10" />
          </div>
          {/* Vinyl Disc */}
          <div className="absolute top-[5%] left-[33%] z-1 flex size-[90%] items-center">
            <div
              aria-hidden="true"
              className="vinyl-disc absolute flex size-[calc(var(--vinyl-size)*0.9)] items-center justify-center rounded-full"
            >
              <div className="relative flex size-[36%] items-center justify-center overflow-hidden rounded-full">
                <div className="bg-ruby-9 absolute inset-0 h-full w-full object-cover" />
                <span className="relative size-[7%] rounded-full bg-[#0d0d0d]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grow">
        <p className="text-gray-12 text-base font-medium">
          A Really Long Song Title
        </p>
        <p className="text-sm">Artist</p>
      </div>

      <div>
        <button className="bg-gray-3 flex size-10 cursor-pointer items-center justify-center rounded-full">
          <IconMediaPlayFill18 className="text-gray-11 size-4" />
        </button>
      </div>
    </div>
  );
}
