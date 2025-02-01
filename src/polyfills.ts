// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).global = window;

import {shouldPolyfill} from "@formatjs/intl-durationformat/should-polyfill"

/**
 * Polyfills the {@code Intl.DurationFormat} for browsers, that do not support them.
 * <br>
 * Under the major browsers, this is currently not supported e.g. by Firefox.
 *
 * @see <a href="https://formatjs.github.io/docs/polyfills/intl-durationformat/">FormatJS Polyfills</a>
 * @see <a href="https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat">Intl.DurationFormat</a>
 */
async function polyfill(): Promise<void> {
    if (shouldPolyfill()) {
        await import("@formatjs/intl-durationformat/polyfill-force");
    }
}

polyfill().then();
