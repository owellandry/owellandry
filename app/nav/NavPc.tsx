import VsCode from '@/app/layout/vscode/index'
import Settings from '@/app/layout/setting/index'
import Safari from '@/app/layout/safari/index'
import Notes from '@/app/layout/notes/index'
import Discord from '@/app/layout/discord/index'
import Console from '@/app/layout/console/index'
import Chrome from '@/app/layout/chrome/index'


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
