import Select from "shared/ui/Select/Select";
import cls from "./CurrencySelect.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Currency } from "../../model/types";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { Listbox } from "shared/ui/ListBox/ListBox";

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
];

const CurrencySelect = memo(
  ({ className, value, onChange, readonly }: CurrencySelectProps) => {
    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback((value:string) => {
      onChange?.(value as Currency);
    }, [onChange]);

    return (
      <Listbox
        className={classNames(cls.currencySelect, {}, [className])}
        value={value}
        items={options}
        defaultValue={t('Валюта')}
        label={t('Валюта')}
        onChange={onChangeHandler}
        readonly={readonly}
        direction={"top right"}
      />
    );
  }
);

export default CurrencySelect;
