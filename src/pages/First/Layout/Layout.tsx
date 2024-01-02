
import { Box } from "@mui/material";
import { IProps } from "../../../interfaces/common.interface";
import { Link } from "react-router-dom";

const Layout = ({personalInfo, children}: IProps) => {
    
    return (
        <Box className="container-fluid">
            <Box className="container">
                <Box className="col-sm-12 cv-cont">
                    <Box className="header row">
                        <h2>{personalInfo.name}</h2>
                        <p style={{ fontWeight: 600 }}>{personalInfo.title}</p>
                    </Box>

                    <nav>
                        <Box className="nav nav-tabs" id="nav-tab" role="tablist">
                            <Link to='/' className="nav-item nav-link active">Home</Link>
                            <Link to='/myexprience' className="nav-item nav-link">My Experience</Link>
                            <Link to='/projects' className="nav-item nav-link">Clients & Projects</Link>
                            <Link to='/stuff' className="nav-item nav-link">My Stuff</Link>
                            <Link to='/connect' className="nav-item nav-link">Connect</Link>
                        </Box>
                    </nav>

                    <Box className="tab-content" id="nav-tabContent">
                        <Box className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            
                                {children}
                            
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Layout;