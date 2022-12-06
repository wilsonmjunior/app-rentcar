import React, { useMemo } from 'react'
import { useTheme } from 'styled-components'
import { LocaleConfig, Calendar as RNCalendar } from 'react-native-calendars'
import { Feather } from '@expo/vector-icons'

export function Calendar() {
  LocaleConfig.locales['br'] = {
    monthNames: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sabado'],
    dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex', 'Sab'],
  };
  LocaleConfig.defaultLocale = 'br';

  const theme = useTheme();

  const currentDate = useMemo(() => {
    const date = new Date();
    return date.toISOString();
  }, [])

  return (
    <RNCalendar
      renderArrow={(direction) =>
        <Feather
          size={24}
          color={theme.colors.text}
          name={direction === 'left' ? 'chevron-left' : 'chevron-right' }
        />
      }
      headerStyle={{
        backgroundColor: theme.colors.background_secondary,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.text_detail,
        paddingBottom: 10,
        marginBottom: 10
      }}
      theme={{
        textDayFontFamily: theme.fonts.primary_400,
        textDayHeaderFontFamily: theme.fonts.primary_500,
        textDayHeaderFontSize: 10,
        textMonthFontFamily: theme.fonts.secondary_600,
        monthTextColor: theme.colors.title,
        textMonthFontSize: 20,
        arrowStyle: {
          marginHorizontal: -15,
        }
      }}
      firstDay={1}
      minDate={currentDate}
      // onVisibleMonthsChange={(months) => {
      //   console.warn('months:: ', months)
      // }}
      // onDayPress={(day) => {
      //   console.warn('day:: ', day)
      // }}
      // pastScrollRange={50}
      // futureScrollRange={50}
      // scrollEnabled={true}
      // showScrollIndicator={true}
    />
  )
}
