export default function useDate() {
    const daysWeek = ['Dom', 'Seg', 'Ter', 'Quar', 'Quin','Sex','Sab']
    const mounths = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']

    const date = new Date()

    const day =  date.getDate()
    const dayWeek = daysWeek[date.getDay()]
    const mounth = mounths[date.getMonth()]

    return {day, dayWeek, mounth}
}