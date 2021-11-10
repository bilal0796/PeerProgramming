import { Badge } from 'react-bootstrap'
const Mybadge = (props) => (
<h1>
    Example heading <Badge variant= {props.color}>
        {props.string2}
    </Badge>
  </h1>
)
export default Mybadge