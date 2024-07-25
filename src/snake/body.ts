import { IData, INode } from "@/interfaces/snake";

export class Node implements INode {
    data: IData;
    next: INode | null;

    constructor(data: IData, next = null) {
        this.data = data;
        this.next = next;
    }
}

export class Body {
    private head: INode | null;
    private size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertNode(data: IData) {
        this.head = new Node(data, this.head as null);
        this.size++;
    }

    getHead() {
        return this.head;
    }


    getSize(): number {
        return this.size;
    }

    getNodesList() {
        const nodeList = [];
        let currentNode = this.head;

        while (currentNode) {
            nodeList.push(currentNode);
            currentNode = currentNode.next;
        }

        return nodeList;
    }

    moveNodes(data: IData) {
        let currentNode: INode | null = this.head as INode;
        let prevData = currentNode.data;
        let old: IData | null = null;
        currentNode.data = data as IData;

        while (currentNode) {
            if (currentNode && old) {
                prevData = currentNode.data;
                currentNode.data = old;
                old = null;
            }

            currentNode = currentNode.next as any;

            if (currentNode && !old) {
                old = currentNode.data;
                currentNode.data = prevData as IData;
                currentNode = currentNode.next;
            }
        }
    }
}