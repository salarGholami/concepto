"use client";

const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

function numberWithCommas(x: number | string) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function toPersianNumbers(n: number | string) {
  return n.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x)]);
}

export function toPersianNumberWithComma(n: number | string) {
  const numWithCommas = numberWithCommas(n);
  return toPersianNumbers(numWithCommas);
}

type PersianNumberProps = {
  value: string | number;
};

export default function PersianNumber({ value }: PersianNumberProps) {
  if (typeof value === "number" || /^\d+$/.test(value.toString())) {
    return <>{toPersianNumberWithComma(value)}</>;
  }

  return <>{value}</>;
}
