import { Link, useMatch, useResolvedPath } from "react-router-dom"

export const Links = ({link, children, ...props}) => {
  const path = useResolvedPath(link)
  const isActive = useMatch({path: path.pathname, end: true})
  let active = ""
  if (isActive)
    active = "active"
  return (
    <li>
        <Link to={link} {...props} className={active}>
            <span className="icon"><i className=""></i></span>
            <span className="item">{children}</span>
        </Link>
    </li>
  )
}
