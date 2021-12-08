import React, { useLayoutEffect, useRef } from 'react';
import { OrgChart } from 'd3-org-chart';
import * as d3 from 'd3';
import './style1.scss';


export const OrgChartComponent = (props, ref) => {
  const d3Container = useRef(null);
  let chart = null;

  function addNode(node) {
    chart.addNode(node);
  }

  props.setClick(addNode);

  // We need to manipulate DOM
  useLayoutEffect(() => {
    if (props.data && d3Container.current) {
      if (!chart) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        chart = new OrgChart();
      }
      chart
        .container(d3Container.current)
        .data(props.data)

          .rootMargin(100)
          .nodeWidth((d) => 210)
          .nodeHeight((d) => 140)
          .childrenMargin((d) => 130)
          .compactMarginBetween((d) => 75)
          .compactMarginPair((d) => 80)
          .buttonContent(({node,state})=>`<img src="/images/arrow-down.png" alt="" style="display: flex;justify-content: center;
align-items: center; width: 20px; height: 20px;margin: 5px 0 0 10px;"/> `)
          .linkUpdate(function (d, i, arr) {
              d3.select('.svg-chart-container')
                  .attr("preserveAspectRatio", "xMinYMin meet")
                  .attr("viewBox", "0 0 800 800")
                  .classed("svg-content", true);
            d3.select(this)
                .attr('stroke', (d) =>
                    d.data._upToTheRootHighlighted ? '#152785' : 'lightgray'
                )
                .attr('stroke-width', (d) =>
                    d.data._upToTheRootHighlighted ? 5 : 1.5
                )
                .attr('stroke-dasharray', '4,4')


            if (d.data._upToTheRootHighlighted) {
              d3.select(this).raise();
            }
          })
        .onNodeClick((d, i, arr) => {
        })
          .nodeContent(data=> {
            const colors = [
              '#6E6B6F',
              '#18A8B6',
              '#F45754',
              '#96C62C',
              '#BD7E16',
              '#802F74',
            ];
            const color = colors[data.depth % colors.length];
            const imageDim = 80;
            const lightCircleDim = 95;
            const outsideCircleDim = 110;

            return `
            <div style="background-color:white; position:absolute;width:${
                data.width
            }px;height:${data.height}px;">
                   <div style="background-color:${color};position:absolute;margin-top:${-outsideCircleDim / 2+'px'};margin-left:${data.width / 2 - outsideCircleDim / 2}px;border-radius:100px;width:${outsideCircleDim}px;height:${outsideCircleDim}px;"></div>
                   <div style="background-color:#ffffff;position:absolute;margin-top:${-
                lightCircleDim / 2+'px'
            };margin-left:${data.width / 2 - lightCircleDim / 2+'px'};border-radius:100px;width:${lightCircleDim}px;height:${lightCircleDim}px;"></div>
                   <img src=" ${
                data.data.imageUrl
            }" style="position:absolute;margin-top:-${imageDim / 2}px;margin-left:${data.width / 2 - imageDim / 2+'px'};border-radius:100px;width:${imageDim}px;height:${imageDim}px;" />
                   <div class="card" style="top:${
                outsideCircleDim / 2 + 10
            }px;position:absolute;height:30px;width:${data.width}px;background-color:#3AB6E3;">
                      <div style="background-color:${color};height:28px;text-align:center;padding-top:5px;color:#ffffff;font-weight:bold;font-size:16px">
                          ${data.data.name} 
                      </div>
                      <div style="background-color:#F0EDEF;height:28px;text-align:center;padding-top:5px;color:#424142;font-size:16px">
                          ${data.data.positionName} 
                      </div>
                   </div>
               </div>
            
            `
          })
        .render();
    }
  }, [props.data, d3Container.current]);

  return (

      <div className={'svg_container'} ref={d3Container} />


  );
};

