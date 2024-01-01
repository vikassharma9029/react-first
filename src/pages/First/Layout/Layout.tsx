
import { Box } from "@mui/material";

type IInfo = {
    name: string,
    designation: string,
    title: string,
    address: string,
    dob: string
}

type IProps = {
    personalInfo: IInfo;
    children: React.ReactNode;
}

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
                            <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Home</a>
                            <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Resume</a>
                            <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#port-folio" role="tab" aria-controls="nav-profile" aria-selected="false">Portfolio</a>
                            <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</a>
                        </Box>
                    </nav>

                    <Box className="tab-content" id="nav-tabContent">
                        <Box className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <Box className="cv-port row">
                                {children}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Layout;