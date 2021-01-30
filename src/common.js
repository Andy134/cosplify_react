export function Number(props) {
    let converted = props.number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return <span>{converted}</span>
}