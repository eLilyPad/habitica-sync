import { ItemView,WorkspaceLeaf } from "obsidian";
import * as React from "react";
import * as ReactDOM from "react-dom";
import ReactView from "./ReactView";
import ExamplePlugin from "main";


export const VIEW_TYPE_EXAMPLE = "example-view"

export class ExampleView extends ItemView {
    plugin: ExamplePlugin;
    constructor(leaf: WorkspaceLeaf, plugin: ExamplePlugin) {
        super(leaf)
        this.plugin = plugin
    }

    getViewType() {
        return VIEW_TYPE_EXAMPLE
    }

    getDisplayText() {
        return "Example View"
    }

    async onOpen() {
        ReactDOM.render(
            <ReactView userID = {this.plugin.settings.userID} tokenAPI = {this.plugin.settings.apiToken} plugin={this.plugin}/>,
           this.containerEl.children[1]
        )
    }

    async onClose(){
        ReactDOM.unmountComponentAtNode(this.containerEl.children[1]);
    }
}