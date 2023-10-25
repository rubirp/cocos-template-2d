import { _decorator, Component } from 'cc';
const { ccclass, property } = _decorator;

// Get globlal dat.gui instance initialiced in runner.js
//import {GUI} from 'dat.gui';
//const gui: GUI = globalThis.gui;
const gui: any = globalThis.gui;

@ccclass('Test')
export class Test extends Component {

    public onLoad(): void {
        this.initGUI();
    }

    private initGUI(): void {
        if(!gui) return;

        var obj = 
        {
            testCommand:  this.onTestCommand.bind(this),
        }

        const folderCommands = gui.addFolder('Commands');
        folderCommands.add(obj, 'testCommand');
        folderCommands.open();
    }

    private onTestCommand(): void {
        alert("This is a test!");
    }

    
}


