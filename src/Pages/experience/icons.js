import { blue, cyan, green, orange, red, yellow } from '@material-ui/core/colors'
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiMaterialUi, SiNetlify } from 'react-icons/si'
import { DiGit } from 'react-icons/di'
import { CgSearchFound } from 'react-icons/cg'
import { GrNode } from 'react-icons/gr'
import MouseOverPopover from '../../Components/MousePopOver'

export const icons = [
    {
        id: 1,
        // icon: <SiJavascript style={{ display: 'flex', flexDirection: 'row', fontSize: "3rem" }} color={yellow[500]} />,
        icon: <MouseOverPopover icon={<SiJavascript style={{ display: 'flex', flexDirection: 'row', fontSize: "3rem" }} color={yellow[500]} />} title='Javascript' />,
        category: 'Language'
    },
    {
        id: 2,
        icon: <MouseOverPopover icon={<SiHtml5 style={{ display: 'flex', flexDirection: 'row', fontSize: "3rem" }} color={red[700]} />} title='HTML' />,
        category: 'Language'
    },
    {
        id: 3,
        icon: <MouseOverPopover icon={<SiCss3 style={{ display: 'flex', flexDirection: 'row', fontSize: "3rem" }} color={blue[500]} />} title='CSS' />,
        category: 'Language'
    },
    {
        id: 4,
        icon: <MouseOverPopover icon={<DiGit style={{ display: 'flex', flexDirection: 'row', fontSize: "3rem" }} color={orange[900]} />} title='Git version control' />,
        category: 'Version control'
    },
    {
        id: 5,
        icon: <MouseOverPopover icon={<SiReact style={{ display: 'flex', flexDirection: 'row', fontSize: "3rem" }} color={blue[300]} />} title='React' />,
        category: 'Library'

    },
    {
        id: 6,
        icon: <MouseOverPopover icon={<SiMaterialUi style={{ display: 'flex', flexDirection: 'row', fontSize: "3rem" }} color={blue[900]} />} title='Material UI' />,
        category: 'Framework'
    },
    {
        id: 7,
        icon: <MouseOverPopover icon={<SiNetlify style={{ display: 'flex', flexDirection: 'row', fontSize: "3rem" }} color={cyan[500]} />} title='Netlify' />,
        category: 'Deployment'
    },
    {
        id: 8,
        icon: <MouseOverPopover icon={<CgSearchFound style={{ display: 'flex', flexDirection: 'row', fontSize: "3rem" }} color={blue[900]} />} title='SEO' />,
        category: 'Deployment'
    },
    {
        id: 9,
        icon: <MouseOverPopover icon={<GrNode style={{ display: 'flex', flexDirection: 'row', fontSize: "3rem" }} color={green[500]} />} title='Node JS' />,
        category: 'Language'
    },

]