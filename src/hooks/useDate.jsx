export default function useDate() {
    const daysWeeks = ['Dom', 'Seg', 'Ter', 'Quar', 'Quin','Sex','Sab']
    const mounths = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']

    const date = new Date()

    const day =  date.getDate()
    const dayWeek = daysWeeks[date.getDay()]
    const mounth = mounths[date.getMonth()]

    return {day, dayWeek, mounth}
}