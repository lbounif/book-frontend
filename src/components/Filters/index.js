import "./filters.css"
import { Input } from "antd"

const Filters = ({styles}) => {
    return (
        <div style={{...styles}} className="filters-container">
            <div className="filters-header">Filters</div>
            <div className="filters">
                <Input 
                  style={{ height: 50, marginBottom: 30}}
                  placeholder="Search by Title"
                //   onChange={(evt)=> }
                  />
                <Input 
                  style={{ height: 50, marginBottom: 30}}
                  placeholder="Search by Author"
                //   onChange={(evt)=> }
                  />
            </div>
        </div>
    )
}

export default Filters