import './Utils/long-safe.js';
import makeWASocket from './Socket/index.js';
import chalk from 'chalk';

const CYAN = chalk.hex('#00c2ff');
const CYAN_BOLD = chalk.hex('#00c2ff').bold;
const GRAY = chalk.gray;
const DIM = chalk.dim;
const WHITE = chalk.white.bold;

const banner = `
${CYAN('╔══════════════════════════════════════════════════════════╗')}
${CYAN('║')}                                                          ${CYAN('║')}
${CYAN('║')}   ${CYAN_BOLD('██╗  ██╗ █████╗ ██╗  ██╗██╗   ██╗ ██████╗ ██╗   ██╗')}   ${CYAN('║')}
${CYAN('║')}   ${CYAN_BOLD('╚██╗██╔╝██╔══██╗╚██╗██╔╝██║   ██║██╔═══██╗██║   ██║')}   ${CYAN('║')}
${CYAN('║')}   ${CYAN_BOLD(' ╚███╔╝ ███████║ ╚███╔╝ ██║   ██║██║   ██║██║   ██║')}   ${CYAN('║')}
${CYAN('║')}   ${CYAN_BOLD(' ██╔██╗ ██╔══██║ ██╔██╗ ╚██╗ ██╔╝██║   ██║██║   ██║')}   ${CYAN('║')}
${CYAN('║')}   ${CYAN_BOLD('██╔╝ ██╗██║  ██║██╔╝ ██╗ ╚████╔╝ ╚██████╔╝╚██████╔╝')}   ${CYAN('║')}
${CYAN('║')}   ${CYAN_BOLD('╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝  ╚═══╝   ╚═════╝  ╚═════╝')}   ${CYAN('║')}
${CYAN('║')}                                                          ${CYAN('║')}
${CYAN('╠══════════════════════════════════════════════════════════╣')}
${CYAN('║')}   ${WHITE('xaxvovbaileys')} ${DIM('·')} ${CYAN_BOLD('Update New Release November Xaxvov')}      ${CYAN('║')}
${CYAN('║')}   ${GRAY('A Baileys-based WhatsApp Web library New')}                ${CYAN('║')}
${CYAN('╚══════════════════════════════════════════════════════════╝')}
`;

console.log(banner);

console.log(
  `${GRAY('📢')} ${GRAY('Stay updated with the latest xaxvovbaileys news:')}`
);

console.log(
  `${CYAN('→')} ${chalk.cyan.underline('https://t.me/xaxvovinformation')}\n`
);

console.log(
  `${DIM('──────────────────────────────────────────────────────────')}\n`
);

export * from '../WAProto/index.js';
export * from './Utils/index.js';
export * from './Types/index.js';
export * from './Defaults/index.js';
export * from './WABinary/index.js';
export * from './WAM/index.js';
export * from './WAUSync/index.js';
export * from './Store/index.js';

export { makeWASocket };
export default makeWASocket;
