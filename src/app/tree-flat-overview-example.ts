import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  id: number;
  children?: FoodNode[];
}

const TREE_DATA: any[] = [
  {
    id: 1,
    name: 'Msuzukiiqwwwwwwwwwjjjj',
    level: 1,
    parentId: 0,
    rootBrandId: 1,
    companyId: 1,
    companyName: 'Kantar',
    children: [
      {
        id: 2,
        name: 'SUV',
        level: 2,
        parentId: 1,
        rootBrandId: 1,
        companyId: 1,
        companyName: 'Kantar',
        children: [
          {
            name: '',
            id: -1,
          },
        ],
      },
      {
        id: 3,
        name: 'LuxSUV',
        level: 2,
        parentId: 1,
        rootBrandId: 1,
        companyId: 1,
        companyName: 'Kantar',
        children: [
          {
            id: 5,
            name: 'Breeza',
            level: 3,
            parentId: 3,
            rootBrandId: 1,
            companyId: 1,
            companyName: 'Kantar',
            children: [
              {
                id: 20,
                name: 'Breeza Sub brand',
                level: 4,
                parentId: 5,
                rootBrandId: 1,
                companyId: 1,
                companyName: 'Kantar',
                children: [
                  {
                    id: 23,
                    name: 'Breeza Sub Sub brand edit 2',
                    level: 5,
                    parentId: 20,
                    rootBrandId: 1,
                    companyId: 1,
                    companyName: 'Kantar',
                    children: [
                      {
                        name: '',
                        id: -1,
                      },
                    ],
                  },
                  {
                    name: '',
                    id: -1,
                  },
                ],
              },
              {
                id: 21,
                name: 'Breeza Sub brand 2',
                level: 4,
                parentId: 5,
                rootBrandId: 1,
                companyId: 1,
                companyName: 'Kantar',
                children: [
                  {
                    name: '',
                    id: -1,
                  },
                ],
              },
              {
                name: '',
                id: -1,
              },
            ],
          },
          {
            id: 165,
            name: 'test1235',
            level: 3,
            parentId: 3,
            rootBrandId: 1,
            companyId: 1,
            companyName: 'Kantar',
            children: [
              {
                id: 166,
                name: 'testhierarchu',
                level: 4,
                parentId: 165,
                rootBrandId: 1,
                companyId: 1,
                companyName: 'Kantar',
                children: [
                  {
                    name: '',
                    id: -1,
                  },
                ],
              },
              {
                name: '',
                id: -1,
              },
            ],
          },
          {
            name: '',
            id: -1,
          },
        ],
      },
      {
        id: 4,
        name: 'SportS',
        level: 2,
        parentId: 1,
        rootBrandId: 1,
        companyId: 1,
        companyName: 'Kantar',
        children: [
          {
            name: '',
            id: -1,
          },
        ],
      },
      {
        id: 7,
        name: 'Sedan',
        level: 2,
        parentId: 1,
        rootBrandId: 1,
        companyId: 1,
        companyName: 'Kantar',
        children: [
          {
            id: 8,
            name: 'Drize',
            level: 3,
            parentId: 7,
            rootBrandId: 1,
            companyId: 1,
            companyName: 'Kantar',
            children: [
              {
                name: '',
                id: -1,
              },
            ],
          },
          {
            id: 73,
            name: 'qwerty',
            level: 3,
            parentId: 7,
            rootBrandId: 1,
            companyId: 1,
            companyName: 'Kantar',
            children: [
              {
                id: 74,
                name: 'qwerty1',
                level: 4,
                parentId: 73,
                rootBrandId: 1,
                companyId: 1,
                companyName: 'Kantar',
                children: [
                  {
                    name: '',
                    id: -1,
                  },
                ],
              },
              {
                name: '',
                id: -1,
              },
            ],
          },
          {
            name: '',
            id: -1,
          },
        ],
      },
      {
        id: 24,
        name: 'yuuu',
        level: 2,
        parentId: 1,
        rootBrandId: 1,
        companyId: 1,
        companyName: 'Kantar',
        children: [
          {
            name: '',
            id: -1,
          },
        ],
      },
      {
        id: 25,
        name: 'test',
        level: 2,
        parentId: 1,
        rootBrandId: 1,
        companyId: 1,
        companyName: 'Kantar',
        children: [
          {
            name: '',
            id: -1,
          },
        ],
      },
      {
        id: 26,
        name: 'test2',
        level: 2,
        parentId: 1,
        rootBrandId: 1,
        companyId: 1,
        companyName: 'Kantar',
        children: [
          {
            name: '',
            id: -1,
          },
        ],
      },
      {
        id: 27,
        name: 'test3',
        level: 2,
        parentId: 1,
        rootBrandId: 1,
        companyId: 1,
        companyName: 'Kantar',
        children: [
          {
            name: '',
            id: -1,
          },
        ],
      },
      {
        id: 28,
        name: 'test4',
        level: 2,
        parentId: 1,
        rootBrandId: 1,
        companyId: 1,
        companyName: 'Kantar',
        children: [
          {
            name: '',
            id: -1,
          },
        ],
      },
      {
        name: '',
        id: -1,
      },
    ],
  },
  {
    id: 9,
    name: 'Cocacola-test',
    level: 1,
    parentId: 0,
    rootBrandId: 9,
    companyId: 1,
    companyName: 'Kantar',
    children: [
      {
        id: 10,
        name: 'CarbonatedDrink',
        level: 2,
        parentId: 9,
        rootBrandId: 9,
        companyId: 1,
        companyName: 'Kantar',
        children: [
          {
            id: 12,
            name: 'Softdrink',
            level: 3,
            parentId: 10,
            rootBrandId: 9,
            companyId: 1,
            companyName: 'Kantar',
            children: [
              {
                id: 16,
                name: 'Coke',
                level: 3,
                parentId: 12,
                rootBrandId: 9,
                companyId: 1,
                companyName: 'Kantar',
                children: [
                  {
                    id: 48,
                    name: 'a',
                    level: 4,
                    parentId: 16,
                    rootBrandId: 9,
                    companyId: 1,
                    companyName: 'Kantar',
                    children: [
                      {
                        id: 49,
                        name: 'b',
                        level: 5,
                        parentId: 48,
                        rootBrandId: 9,
                        companyId: 1,
                        companyName: 'Kantar',
                        children: [
                          {
                            name: '',
                            id: -1,
                          },
                        ],
                      },
                      {
                        id: 50,
                        name: 'c',
                        level: 5,
                        parentId: 48,
                        rootBrandId: 9,
                        companyId: 1,
                        companyName: 'Kantar',
                        children: [
                          {
                            id: 51,
                            name: 'd',
                            level: 6,
                            parentId: 50,
                            rootBrandId: 9,
                            companyId: 1,
                            companyName: 'Kantar',
                            children: [
                              {
                                id: 52,
                                name: 't',
                                level: 7,
                                parentId: 51,
                                rootBrandId: 9,
                                companyId: 1,
                                companyName: 'Kantar',
                                children: [
                                  {
                                    name: '',
                                    id: -1,
                                  },
                                ],
                              },
                              {
                                name: '',
                                id: -1,
                              },
                            ],
                          },
                          {
                            name: '',
                            id: -1,
                          },
                        ],
                      },
                      {
                        name: '',
                        id: -1,
                      },
                    ],
                  },
                  {
                    name: '',
                    id: -1,
                  },
                ],
              },
              {
                id: 17,
                name: '7up',
                level: 3,
                parentId: 12,
                rootBrandId: 9,
                companyId: 1,
                companyName: 'Kantar',
                children: [
                  {
                    name: '',
                    id: -1,
                  },
                ],
              },
              {
                name: '',
                id: -1,
              },
            ],
          },
          {
            id: 13,
            name: 'Low Sugar',
            level: 3,
            parentId: 10,
            rootBrandId: 9,
            companyId: 1,
            companyName: 'Kantar',
            children: [
              {
                id: 18,
                name: 'DietCoke',
                level: 3,
                parentId: 13,
                rootBrandId: 9,
                companyId: 1,
                companyName: 'Kantar',
                children: [
                  {
                    name: '',
                    id: -1,
                  },
                ],
              },
              {
                id: 19,
                name: 'Cola Zero ',
                level: 3,
                parentId: 13,
                rootBrandId: 9,
                companyId: 1,
                companyName: 'Kantar',
                children: [
                  {
                    name: '',
                    id: -1,
                  },
                ],
              },
              {
                name: '',
                id: -1,
              },
            ],
          },
          {
            name: '',
            id: -1,
          },
        ],
      },
      {
        id: 11,
        name: 'Water',
        level: 2,
        parentId: 9,
        rootBrandId: 9,
        companyId: 1,
        companyName: 'Kantar',
        children: [
          {
            name: '',
            id: -1,
          },
        ],
      },
      {
        name: '',
        id: -1,
      },
    ],
  },
  {
    id: 31,
    name: 'Pepsi',
    level: 1,
    parentId: 0,
    rootBrandId: 31,
    companyId: 1,
    companyName: 'Kantar',
    children: [
      {
        id: 32,
        name: 'Sub Pepsi',
        level: 2,
        parentId: 31,
        rootBrandId: 31,
        companyId: 1,
        companyName: 'Kantar',
        children: [
          {
            name: '',
            id: -1,
          },
        ],
      },
      {
        name: '',
        id: -1,
      },
    ],
  },
  {
    id: 47,
    name: 'sprite',
    level: 1,
    parentId: 0,
    rootBrandId: 47,
    companyId: 1,
    companyName: 'Kantar',
    children: [
      {
        name: '',
        id: -1,
      },
    ],
  },
  {
    id: 125,
    name: 'swagger test',
    level: 1,
    parentId: 0,
    rootBrandId: 125,
    companyId: 1,
    companyName: 'Kantar',
    children: [
      {
        name: '',
        id: -1,
      },
    ],
  },
  {
    id: 126,
    name: 'mk',
    level: 1,
    parentId: 0,
    rootBrandId: 126,
    companyId: 1,
    companyName: 'Kantar',
    children: [
      {
        name: '',
        id: -1,
      },
    ],
  },
  {
    id: 127,
    name: 'mkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
    level: 1,
    parentId: 0,
    rootBrandId: 127,
    companyId: 1,
    companyName: 'Kantar',
    children: [
      {
        name: '',
        id: -1,
      },
    ],
  },
  {
    name: '',
    id: -1,
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  id: number;
}

/**
 * @title Tree with flat nodes
 */
@Component({
  selector: 'tree-flat-overview-example',
  templateUrl: 'tree-flat-overview-example.html',
})
export class TreeFlatOverviewExample {
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      id: node.id,
    };
  };

  treeControl = new FlatTreeControl<any>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  addNode(node: any) {
    console.log(node);
    let req = {
      name: node.name.trim(),
      parentLevel: node.isRoot ? 0 : node.parent.data.level,
      parentId: node.isRoot ? 0 : node.parent.data.id,
      companyId: node.parent.data.companyId,
      id: 100,
      level: 1,
      rootBrandId: 1,
      companyName: 'Kantar',
    };
  }
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}

/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
