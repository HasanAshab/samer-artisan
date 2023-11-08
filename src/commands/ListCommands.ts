import type { SamerArtisan } from "../SamerArtisan";
import { Command } from "./Command";
import { green } from "chalk";

export default class ListCommands extends Command {
  signature = "list";
  description = "Print all available commands";
  
  constructor(private readonly samerArtisan: typeof SamerArtisan) {
    super();
    this.samerArtisan = samerArtisan;
  }
  
  async handle() {
    console.log("Available Commands:\n");
    const commands = await this.samerArtisan.$getCommands();
    commands.forEach((command: Command) => {
      const padding = ' '.repeat(30 - command.base.length);
      console.log(`  ${green(command.base)}${padding}${command.description}`);
    });
  }
}

