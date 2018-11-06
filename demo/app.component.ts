import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import * as shape from 'd3-shape';
import {Subject} from 'rxjs';
import {colorSets} from '../src/utils/color-sets';
import {id} from '../src/utils/id';
import chartGroups from './chartTypes';
import {countries, generateGraph} from './data';
import {Graph, Node, Edge, Layout} from '../src/ngx-graph.module';
import {ColaForceDirectedLayout, D3ForceDirectedLayout} from '../src';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  version = APP_VERSION;

  theme = 'dark';
  chartType = 'directed-graph';
  chartTypeGroups: any;
  chart: any;
  realTimeData: boolean = false;
  countrySet: any[];
  graph: Graph;

  view: any[];
  width: number = 700;
  height: number = 300;
  fitContainer: boolean = true;
  autoZoom: boolean = false;
  panOnZoom: boolean = true;
  enableZoom: boolean = true;
  autoCenter: boolean = false;

  // observables
  update$: Subject<any> = new Subject();
  center$: Subject<any> = new Subject();
  zoomToFit$: Subject<any> = new Subject();

  // options
  showLegend = false;
  orientation: string = 'LR'; // LR, RL, TB, BT

  orientations: any[] = [
    {
      label: 'Left to Right',
      value: 'LR'
    },
    {
      label: 'Right to Left',
      value: 'RL'
    },
    {
      label: 'Top to Bottom',
      value: 'TB'
    },
    {
      label: 'Bottom to Top',
      value: 'BT'
    }
  ];

  layoutId: string = 'dagreNodesOnly';
  customLayout: Layout;
  layouts: any[] = [
    {
      label: 'Dagre',
      value: 'dagre',
    },
    {
      label: 'Dagre Nodes Only',
      value: 'dagreNodesOnly',
    },
    {
      label: 'Dagre Cluster',
      value: 'dagreCluster',
      isClustered: true,
    },
    {
      label: 'Cola Force Directed',
      value: 'colaForceDirected',
      customLayout: new ColaForceDirectedLayout(),
      isClustered: true,
    },
    {
      label: 'D3 Force Directed',
      value: 'd3ForceDirected',
      customLayout: new D3ForceDirectedLayout(),
    },
  ];

  // line interpolation
  curveType: string = 'Linear';
  curve: any = shape.curveLinear;
  interpolationTypes = [
    'Bundle',
    'Cardinal',
    'Catmull Rom',
    'Linear',
    'Monotone X',
    'Monotone Y',
    'Natural',
    'Step',
    'Step After',
    'Step Before'
  ];

  colorSchemes: any;
  colorScheme: any;
  schemeType: string = 'ordinal';
  selectedColorScheme: string;

  data = {
    Nodes: [{
      label: '4743302110751: NI 1600 Siseliide',
      Type: 3,
      id: 'd3844c66-8e9d-4b24-b636-564f3929e169'
    }, {label: '10: Joonkeevitamine', Type: 2, id: '53c0f213-7599-42ac-9ab2-014bc497e2d6'}, {
      label: '2M10',
      Type: 1,
      id: '2f8c9522-5f89-4def-89f7-5083917ecbbb'
    }, {label: '3003: Soutec VSTW HG 1270', Type: 4, id: '23e393bc-b309-4a79-bacd-919783eb2f0c'}, {
      label: '2S10',
      Type: 1,
      id: '70df602d-2b4c-4c1c-9f0f-9420d06cbefe'
    }, {label: 'T090: Suurte põlvede koostamine', Type: 4, id: 'd6b679d7-c088-4ae8-92e0-7d5ef74616b7'}, {
      label: 'Mat1',
      Type: 0,
      id: '740b956a-f61c-45b8-a3b7-6bdaf16251fb'
    }, {
      label: 'AA7D7FD144FD73A866918E294616F50D: PL_NI 1600',
      Type: 3,
      id: '3f4d8efa-50fc-4c31-b4c6-35fd69ad9dab'
    }, {label: '10: Lõikamine', Type: 2, id: '74b532c9-a43d-4358-8876-eb5c78b470a2'}, {
      label: 'M20',
      Type: 1,
      id: '3f504f88-2977-4f0b-847d-79eb3e69e34b'
    }, {label: '2865: Forstner, RM-MST-TSS 1500', Type: 4, id: '0fa9600a-ddc3-4cb0-ad2f-bc1bbfe59a58'}, {
      label: 'S20',
      Type: 1,
      id: 'cc336cbf-0293-4f43-8d89-96eeff3ccaf9'
    }, {label: 'M050: Lõikeliin', Type: 4, id: '50b2ee46-0494-478e-88fc-f0b894a06755'}, {
      label: 'Mat80',
      Type: 0,
      id: '12fc601d-638d-4e1f-a89d-e2f01ade79dc'
    }, {
      label: '4743302699447: DX51D+ Zn275 MAE 1,0x1250mm (Desired thickness 0,95mm) Galvanised steel',
      Type: 3,
      id: 'eef4d49c-c9a2-4ec4-a0a2-5b4be6691ede'
    }, {label: '20: Tihendi paigaldus', Type: 2, id: '645b5be1-c590-4782-b531-a3cc086dd8ee'}, {
      label: 'M1',
      Type: 1,
      id: '00b6923a-e854-4da2-8221-4405b671205f'
    }, {
      label: '3016: Spiro Fitting shaper 1250',
      Type: 4,
      id: '6caaef0d-34ab-4acf-9446-72cf44d65cf6'
    }, {label: '1036: Spiro Fitting shaper 5013', Type: 4, id: 'b89e33bb-e16c-413a-b1f2-8a0bc1a7074f'}, {
      label: 'S1',
      Type: 1,
      id: 'c0e7505d-58f3-4319-ba95-88412014c4d1'
    }, {label: 'T090: Suurte põlvede koostamine', Type: 4, id: 'caf17704-22fc-4641-8b46-408759a1ae39'}, {
      label: 'Mat14',
      Type: 0,
      id: 'eeb4028c-f1cf-4e85-8248-65b5b96eafc0'
    }, {
      label: '4743302660713: E-tüüpi tihend EPDM-70  Black D=1600',
      Type: 3,
      id: '7af24a49-e26e-40d9-b5d4-0f11bc60b3e1'
    }],
    Links: [
      {
        source: 'd3844c66-8e9d-4b24-b636-564f3929e169',
        target: '53c0f213-7599-42ac-9ab2-014bc497e2d6',
        label: ''
      },
      {
        source: '53c0f213-7599-42ac-9ab2-014bc497e2d6',
        target: '2f8c9522-5f89-4def-89f7-5083917ecbbb',
        label: ''
      },
      {
        source: '2f8c9522-5f89-4def-89f7-5083917ecbbb',
        target: '23e393bc-b309-4a79-bacd-919783eb2f0c',
        label: ''
      }, {
        source: '53c0f213-7599-42ac-9ab2-014bc497e2d6',
        target: '70df602d-2b4c-4c1c-9f0f-9420d06cbefe',
        label: ''
      }, {
        source: '70df602d-2b4c-4c1c-9f0f-9420d06cbefe',
        target: 'd6b679d7-c088-4ae8-92e0-7d5ef74616b7',
        label: ''
      }, {
        source: '53c0f213-7599-42ac-9ab2-014bc497e2d6',
        target: '740b956a-f61c-45b8-a3b7-6bdaf16251fb',
        label: ''
      }, {
        source: '740b956a-f61c-45b8-a3b7-6bdaf16251fb',
        target: '3f4d8efa-50fc-4c31-b4c6-35fd69ad9dab',
        label: ''
      }, {
        source: '3f4d8efa-50fc-4c31-b4c6-35fd69ad9dab',
        target: '74b532c9-a43d-4358-8876-eb5c78b470a2',
        label: ''
      }, {
        source: '74b532c9-a43d-4358-8876-eb5c78b470a2',
        target: '3f504f88-2977-4f0b-847d-79eb3e69e34b',
        label: ''
      }, {
        source: '3f504f88-2977-4f0b-847d-79eb3e69e34b',
        target: '0fa9600a-ddc3-4cb0-ad2f-bc1bbfe59a58',
        label: ''
      }, {
        source: '74b532c9-a43d-4358-8876-eb5c78b470a2',
        target: 'cc336cbf-0293-4f43-8d89-96eeff3ccaf9',
        label: ''
      }, {
        source: 'cc336cbf-0293-4f43-8d89-96eeff3ccaf9',
        target: '50b2ee46-0494-478e-88fc-f0b894a06755',
        label: ''
      }, {
        source: '74b532c9-a43d-4358-8876-eb5c78b470a2',
        target: '12fc601d-638d-4e1f-a89d-e2f01ade79dc',
        label: ''
      }, {
        source: '12fc601d-638d-4e1f-a89d-e2f01ade79dc',
        target: 'eef4d49c-c9a2-4ec4-a0a2-5b4be6691ede',
        label: ''
      }, {
        source: 'd3844c66-8e9d-4b24-b636-564f3929e169',
        target: '645b5be1-c590-4782-b531-a3cc086dd8ee',
        label: ''
      }, {
        source: '645b5be1-c590-4782-b531-a3cc086dd8ee',
        target: '00b6923a-e854-4da2-8221-4405b671205f',
        label: ''
      }, {
        source: '00b6923a-e854-4da2-8221-4405b671205f',
        target: '6caaef0d-34ab-4acf-9446-72cf44d65cf6',
        label: ''
      }, {
        source: '00b6923a-e854-4da2-8221-4405b671205f',
        target: 'b89e33bb-e16c-413a-b1f2-8a0bc1a7074f',
        label: ''
      }, {
        source: '645b5be1-c590-4782-b531-a3cc086dd8ee',
        target: 'c0e7505d-58f3-4319-ba95-88412014c4d1',
        label: ''
      }, {
        source: 'c0e7505d-58f3-4319-ba95-88412014c4d1',
        target: 'caf17704-22fc-4641-8b46-408759a1ae39',
        label: ''
      }, {
        source: '645b5be1-c590-4782-b531-a3cc086dd8ee',
        target: 'eeb4028c-f1cf-4e85-8248-65b5b96eafc0',
        label: ''
      },
      {source: 'eeb4028c-f1cf-4e85-8248-65b5b96eafc0', target: '7af24a49-e26e-40d9-b5d4-0f11bc60b3e1', label: ''}
    ],
    id: 'd3844c66-8e9d-4b24-b636-564f3929e169'
  };

  constructor() {
    Object.assign(this, {
      countrySet: countries,
      colorSchemes: colorSets,
      chartTypeGroups: chartGroups,
      graph: {
        edges: this.data.Links, nodes: this.data.Nodes
      }
    });

    this.setColorScheme('picnic');
    this.setInterpolationType('Bundle');
  }

  ngOnInit() {
    this.selectChart(this.chartType);

    setInterval(this.updateData.bind(this), 1000);

    if (!this.fitContainer) {
      this.applyDimensions();
    }
  }

  updateData() {
    if (!this.realTimeData) {
      return;
    }

    const country = this.countrySet[Math.floor(Math.random() * this.countrySet.length)];
    const add = Math.random() < 0.7;
    const remove = Math.random() < 0.5;

    if (add) {
      // directed graph

      const hNode = {
        id: id(),
        label: country
      };

      this.graph.nodes.push(hNode);

      this.graph.edges.push({
        source: this.graph.nodes[Math.floor(Math.random() * (this.graph.nodes.length - 1))].id,
        target: hNode.id,
        label: 'on success'
      });

      this.graph.edges = [...this.graph.edges];
      this.graph.nodes = [...this.graph.nodes];
    }
  }

  applyDimensions() {
    this.view = [this.width, this.height];
  }

  toggleEnableZoom(enableZoom: boolean) {
    this.enableZoom = enableZoom;
  }

  toggleFitContainer(fitContainer: boolean, autoZoom: boolean, autoCenter: boolean): void {
    this.fitContainer = fitContainer;
    this.autoZoom = autoZoom;
    this.autoCenter = autoCenter;

    if (this.fitContainer) {
      this.view = undefined;
    } else {
      this.applyDimensions();
    }
  }

  selectChart(chartSelector) {
    this.chartType = chartSelector;

    for (const group of this.chartTypeGroups) {
      for (const chart of group.charts) {
        if (chart.selector === chartSelector) {
          this.chart = chart;
          return;
        }
      }
    }
  }

  select(data) {
    console.log('Item clicked', data);
  }

  setColorScheme(name) {
    this.selectedColorScheme = name;
    this.colorScheme = this.colorSchemes.find(s => s.name === name);
  }

  setInterpolationType(curveType) {
    this.curveType = curveType;
    if (curveType === 'Bundle') {
      this.curve = shape.curveBundle.beta(1);
    }
    if (curveType === 'Cardinal') {
      this.curve = shape.curveCardinal;
    }
    if (curveType === 'Catmull Rom') {
      this.curve = shape.curveCatmullRom;
    }
    if (curveType === 'Linear') {
      this.curve = shape.curveLinear;
    }
    if (curveType === 'Monotone X') {
      this.curve = shape.curveMonotoneX;
    }
    if (curveType === 'Monotone Y') {
      this.curve = shape.curveMonotoneY;
    }
    if (curveType === 'Natural') {
      this.curve = shape.curveNatural;
    }
    if (curveType === 'Step') {
      this.curve = shape.curveStep;
    }
    if (curveType === 'Step After') {
      this.curve = shape.curveStepAfter;
    }
    if (curveType === 'Step Before') {
      this.curve = shape.curveStepBefore;
    }
  }

  onLayoutChange(layoutId: string) {
    const layout = this.layouts.find(layoutRef => layoutRef.value === layoutId);
    if (layout && layout.isClustered) {
      this.addClusters();
    } else {
      this.removeClusters();
    }
    if (layout) {
      this.customLayout = layout.customLayout;
    }
  }

  addClusters() {
    const subGroup = {
      id: id(),
      label: 'Subgroup',
      childNodeIds: [this.graph.nodes[2].id, this.graph.nodes[4].id],
    };
    this.graph.clusters = [{
      id: id(),
      label: 'Cluster',
      childNodeIds: [this.graph.nodes[0].id, subGroup.id],
    }, subGroup];
  }

  removeClusters() {
    this.graph.clusters = [];
  }

  onLegendLabelClick(entry) {
    console.log('Legend clicked', entry);
  }

  toggleExpand(node) {
    console.log('toggle expand', node);
  }

  updateChart() {
    this.update$.next(true);
  }

  zoomToFit() {
    this.zoomToFit$.next(true);
  }

  center() {
    this.center$.next(true);
  }
}
