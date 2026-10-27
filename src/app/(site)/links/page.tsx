"use client";

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
    <div className="mx-auto max-w-3xl px-0 sm:px-4">
      <header
        style={
          { "--avatar-size": "5rem", "--pt": "10rem" } as React.CSSProperties
        }
        className={cn(
          "relative flex justify-center items-center isolate",
          "px-4 sm:px-6 pb-8 pt-(--pt)",
        )}
      >
        <section className="z-10 w-full space-y-4">
          <div className="flex items-end justify-between">
            <div className="aspect-square rounded-full bg-gray-1 border border-gray-4 w-(--avatar-size)" />

            <div className="flex items-center gap-2 sm:gap-4 pb-2">
              <button className="size-8 p-2 cursor-pointer rounded-full flex items-center justify-center">
                <IconDotsOutline18 className="size-4" />
                <span className="sr-only">Settings</span>
              </button>

              <button className="size-8 p-2 cursor-pointer rounded-full flex items-center justify-center">
                <IconMagnifierOutline18 className="size-4" />
                <span className="sr-only">Search</span>
              </button>

              <button className="h-8 px-2.5 py-1.5 cursor-pointer rounded-full bg-gray-12 text-white text-sm font-medium flex items-center gap-0.5">
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
            "overflow-hidden absolute left-0 top-0 w-full z-0",
            "bg-gray-4 sm:rounded-2xl",
            "h-[calc(var(--pt)+var(--avatar-size)*0.33)]",
          )}
        />
      </header>

      <div className="px-4 sm:px-6">
        <div className="space-y-16">
          <section className="flex w-full flex-col gap-4">
            <div className="flex items-center gap-x-2.5">
              <div className="flex gap-x-2 items-center shrink-0">
                <IconCircleUserFill18 className="size-5 text-gray-12" />
                <h2 className="text-base font-[550] text-gray-12">About</h2>
              </div>

              <div
                aria-hidden="true"
                className="w-full border-t border-gray-6 border-dashed"
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
              <div className="flex gap-x-2 items-center shrink-0">
                <IconBookOpen5Fill18 className="size-5 text-gray-12" />
                <h2 className="text-base font-[550] text-gray-12">
                  Currently reading
                </h2>
              </div>

              <div
                aria-hidden="true"
                className="w-full border-t border-gray-6 border-dashed"
              />
            </div>

            <div className="text-gray-11 max-w-3xl space-y-4 text-base/relaxed">
              <div className="w-full rounded-2xl h-50">
                <div className="h-50 flex gap-x-4">
                  <div className="aspect-3/4 h-full bg-gray-1 rounded-lg relative">
                    <span className="absolute inset-0 h-full w-full object-cover" />
                    <div className="pointer-events-none absolute inset-0 rounded-lg inset-ring-1 inset-ring-black/10 dark:inset-ring-white/10" />
                  </div>

                  <div className="grow">
                    <p className="text-base font-medium text-gray-12">
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
              <div className="flex gap-x-2 items-center shrink-0">
                <IconGamepadFill18 className="size-5 text-gray-12" />
                <h2 className="text-base font-[550] text-gray-12">
                  Currently playing
                </h2>
              </div>

              <div
                aria-hidden="true"
                className="w-full border-t border-gray-6 border-dashed"
              />
            </div>

            <div className="text-gray-11 max-w-3xl space-y-4 text-base/relaxed">
              <div className="w-full rounded-2xl bg-gray-3 h-50" />
            </div>
          </section>

          <section className="flex w-full flex-col gap-4">
            <div className="flex items-center gap-x-2.5">
              <div className="flex gap-x-2 items-center shrink-0">
                <IconHeadphonesFill18 className="size-5 text-gray-12" />
                <h2 className="text-base font-[550] text-gray-12">
                  Currently listening to
                </h2>
              </div>

              <div
                aria-hidden="true"
                className="w-full border-t border-gray-6 border-dashed"
              />
            </div>

            <div className="text-gray-11 max-w-3xl space-y-4 text-base/relaxed">
              <div className="w-full rounded-2xl h-50 flex items-center">
                <VinylPlayer size={isMdBreakpoint ? 144 : 88} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
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
    <div className="flex items-center w-full gap-x-4 pr-4">
      <div className="w-44.5">
        <div
          className="relative size-(--vinyl-size) isolate"
          style={{ "--vinyl-size": `${size}px` } as React.CSSProperties}
        >
          {/* Cover */}
          <div className="absolute left-0 top-0 z-2 h-full w-full overflow-hidden rounded-lg bg-gray-1">
            <span className="absolute inset-0 h-full w-full object-cover" />
            <div className="pointer-events-none absolute inset-0 rounded-lg inset-ring-1 inset-ring-black/10 dark:inset-ring-white/10" />
          </div>
          {/* Vinyl Disc */}
          <div className="absolute left-[33%] top-[5%] z-1 flex size-[90%] items-center">
            <div
              aria-hidden="true"
              className="vinyl-disc absolute rounded-full flex items-center justify-center size-[calc(var(--vinyl-size)*0.9)]"
            >
              <div className="relative flex size-[36%] items-center justify-center overflow-hidden rounded-full">
                <div className="absolute inset-0 h-full w-full object-cover bg-ruby-9" />
                <span className="relative size-[7%] rounded-full bg-[#0d0d0d]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grow">
        <p className="text-base font-medium text-gray-12">
          A Really Long Song Title
        </p>
        <p className="text-sm">Artist</p>
      </div>

      <div>
        <button className="bg-gray-3 size-10 rounded-full flex items-center justify-center cursor-pointer">
          <IconMediaPlayFill18 className="size-4 text-gray-11" />
        </button>
      </div>
    </div>
  );
}
