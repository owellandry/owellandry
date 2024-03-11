import VsCode from '../layout/vscode/index'
import Settings from '../layout/settings/index'
import Safari from '../layout/safari/index'
import Notes from '../layout/notes/index'
import Discord from '../layout/discord/index'
import Console from '../layout/console/index'
import Chrome from '../layout/chrome/index'


import './NavPc.css'

export default function Home() {
    return (
        <div className='content-nav-pc-position'>
            <div className='content-nav-icon-pc'>
                <VsCode />
                <Settings />
                <Safari />
                <Notes />
                <Discord />
                <Console />
                <Chrome />
            </div>
            <div className='content-nav-barra-pc'></div>
        </div>
    )
}