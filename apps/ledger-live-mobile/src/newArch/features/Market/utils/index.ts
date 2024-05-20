import { MarketListRequestParams } from "@ledgerhq/live-common/market/types";
import { TFunction } from "i18next";

const indexes: [string, number][] = [
  ["d", 1],
  ["K", 1000],
  ["M", 1000000],
  ["B", 1000000000],
  ["T", 1000000000000],
  ["Q", 1000000000000000],
  ["Qn", 1000000000000000000],
];

const dateFormatters: Record<string, { [key: string]: Intl.DateTimeFormat }> = {};

const formatters: Record<string, { [key: string]: Intl.NumberFormat }> = {};

export const getDateFormatter = (locale: string, interval: string) => {
  if (!dateFormatters[locale]) {
    dateFormatters[locale] = {
      "24h": new Intl.DateTimeFormat(locale, {
        hour: "numeric",
        minute: "numeric",
      }),
      "7d": new Intl.DateTimeFormat(locale, {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      }),
      "30d": new Intl.DateTimeFormat(locale, {
        month: "short",
        day: "numeric",
      }),
      default: new Intl.DateTimeFormat(locale, {
        month: "short",
        day: "numeric",
      }),
    };
  }

  return dateFormatters[locale][interval] || dateFormatters[locale].default;
};

export const counterValueFormatter = ({
  currency,
  value,
  shorten,
  locale,
  t,
  allowZeroValue = false,
  ticker = "",
}: {
  currency?: string;
  value: number;
  shorten?: boolean;
  locale: string;
  t?: TFunction;
  allowZeroValue?: boolean;
  ticker?: string;
}): string => {
  if (isNaN(value) || (!value && !allowZeroValue)) {
    return "-";
  }

  if (!formatters[locale]) formatters[locale] = {};
  if (currency && !formatters[locale]?.[currency]) {
    formatters[locale][currency] = new Intl.NumberFormat(locale, {
      style: currency ? "currency" : "decimal",
      currency,
      maximumFractionDigits: 8,
      maximumSignificantDigits: 8,
    });
  }

  const formatter = currency
    ? formatters[locale][currency]
    : ticker
      ? new Intl.NumberFormat(locale)
      : undefined;

  if (shorten && t && formatter) {
    const sign = value > 0 ? "" : "-";
    const v = Math.abs(value);
    const index = Math.floor(Math.log(v + 1) / Math.log(10) / 3) || 0;

    const [i, n] = indexes[index];

    const roundedValue = Math.floor((v / n) * 1000) / 1000;

    const number = formatter.format(roundedValue);

    const I = t(`numberCompactNotation.${i}`);

    const formattedNumber = number.replace(/([0-9,. ]+)/, `${sign}$1 ${I} `);

    return formattedNumber;
  }

  if (formatter) {
    const formattedValue = formatter.format(value);
    const upperCaseTicker = ticker?.trim()?.toLocaleUpperCase();
    return `${formattedValue} ${upperCaseTicker}`.trim();
  }

  return String(value);
};

export function getAnalyticsProperties<P extends object>(
  requestParams: MarketListRequestParams,
  otherProperties?: P,
) {
  return {
    ...otherProperties,
    access: false,
    sort: `${requestParams.orderBy}_${requestParams.order}`,
    "%change": requestParams.range,
    countervalue: requestParams.counterCurrency,
    view: requestParams.liveCompatible ? "Only Live Supported" : "All coins",
  };
}
