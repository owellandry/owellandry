// src/layout/modules/chrome.jsx

import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from "./chrome.module.css";

export default function Content() {
    const codeString = `function greet() {
  console.log('Hello, world!');
}`;

    const CodePython = `print("Hola!, Mi nombre es owell polanco");`;

    const CodeGo = `package main

import "fmt"

func main() {
    fmt.Println("Bienvenido a mi portafolio web")
}`;

    const CodeRuby = `puts "Soy desarrollador y tengo 20 años"`;

    const CodeTypescript = `console.log("Estoy enfocado en el backend")`;

    const CodeBash = `echo "Aunque tambien se de front"`;

    return (
        <div className={styles.CodeCont}>
            <div className={styles.ContentCode}>
                <div>
                    <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                        {codeString}
                    </SyntaxHighlighter>
                </div>
                <div>
                    <SyntaxHighlighter language="python" style={vscDarkPlus}>
                        {CodePython}
                    </SyntaxHighlighter>
                </div>
                <div>
                    <SyntaxHighlighter language="go" style={vscDarkPlus}>
                        {CodeGo}
                    </SyntaxHighlighter>
                </div>
                <div>
                    <SyntaxHighlighter language="ruby" style={vscDarkPlus}>
                        {CodeRuby}
                    </SyntaxHighlighter>
                </div>
                <div>
                    <SyntaxHighlighter language="typescript" style={vscDarkPlus}>
                        {CodeTypescript}
                    </SyntaxHighlighter>
                </div>
                <div>
                    <SyntaxHighlighter language="bash" style={vscDarkPlus}>
                        {CodeBash}
                    </SyntaxHighlighter>
                </div>
            </div>
        </div>
    );
}
