import type { Candidate } from "https://deno.land/x/ddc_vim@v0.5.2/types.ts";
import { BaseSource } from "https://deno.land/x/ddc_vim@v0.5.2/types.ts";
import type {
  GatherCandidatesArguments,
} from "https://deno.land/x/ddc_vim@v0.5.2/base/source.ts";

type Params = {
  regex: string;
  executable: string;
};

export class Source extends BaseSource {
  async gatherCandidates(
    args: GatherCandidatesArguments,
  ): Promise<Candidate[]> {
    const p = args.sourceParams as Params;
    const proc = Deno.run({ cmd: [p.executable, "-o"], stdout: "piped" });
    await proc.status();
    const output = new TextDecoder().decode(await proc.output()).split("\n");
    const cs: Candidate[] = output
      .flatMap((line) => [
        ...Array.from(line.matchAll(new RegExp(p.regex, "gu"))).map((w) => ({
          word: w[0],
        })),
      ]);
    return cs;
  }

  params(): Params {
    return {
      regex: "[-_\\p{L}\\d]+",
      executable: "win32yank.exe",
    };
  }
}
