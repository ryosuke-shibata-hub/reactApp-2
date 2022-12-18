import * as CSS from "csstype";

export default function MyImage(props) {
    let fname = './' + props.fname
    let size = props.size + "px"

    return (
        <img width={size} src={fname} />
    )
}
