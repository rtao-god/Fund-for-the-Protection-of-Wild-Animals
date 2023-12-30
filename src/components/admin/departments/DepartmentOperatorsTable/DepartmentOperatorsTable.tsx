import React, { useEffect, useRef, useState } from 'react'
import { DepartmentOperator } from '@/interfaces/api/admin/department'
import styles from './DepartmentOperatorsTable.module.scss'
import MoveIcon from '@/components/common/icons/Move'
import TrashIcon from '@/components/common/icons/TrashIcon'
import VsSelect from '@/components/common/controls/VsSelect/VsSelect'
import classNames from 'classnames'

interface DepartmentOperatorsTableProps {
  operatorList: DepartmentOperator[]
  onChangeOperatorPriority: (operatorId: number, value: number) => void
  onOperatorDeselect: (operatorId: number) => void
}

function DepartmentOperatorsTable({
  operatorList,
  onChangeOperatorPriority,
  onOperatorDeselect,
}: DepartmentOperatorsTableProps) {
  useEffect(() => {
    setData(operatorList)
  }, [operatorList])

  const [data, setData] = useState<DepartmentOperator[]>(operatorList)
  const [isDragging, setIsDragging] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const detectLeftButton = (e: React.PointerEvent<HTMLDivElement>): boolean => e.button === 0

  function dragStart(e: React.PointerEvent<HTMLDivElement>, index: number) {
    if (!detectLeftButton(e)) return

    setIsDragging(index)

    const container = containerRef.current
    if (!container) return
    const items = Array.from(container.childNodes) as HTMLElement[]
    const dragItem = items[index] as HTMLElement
    const itemsBelowDragItem = items.slice(index + 1)
    const notDragItems = items.filter((_, i) => i !== index)
    const dragData = data[index]

    let newData = [...data]

    const dragBoundingRect = dragItem.getBoundingClientRect()
    const space = items[1].getBoundingClientRect().top - items[0].getBoundingClientRect().bottom
    const distance = dragBoundingRect.height + space

    const div = document.createElement('div')
    div.id = 'div-temp'
    container.appendChild(div)

    itemsBelowDragItem.forEach(item => {
      item.style.transform = `translateY(${distance}px)`
    })

    let startY = e.clientY

    function dragMove(e: React.PointerEvent<HTMLDivElement>) {
      const posY = e.clientY - startY // Calculate the new Y position based on cursor movement

      dragItem.style.transform = `translateY(${posY}px)`

      notDragItems.forEach(item => {
        const rect1 = dragItem.getBoundingClientRect()
        const rect2 = item.getBoundingClientRect()

        let isOverlapping = rect1.y < rect2.y + rect2.height / 2 && rect1.y + rect1.height / 2 > rect2.y

        if (isOverlapping) {
          if (item.getAttribute('style')) {
            item.style.transform = ''
            index++
          } else {
            item.style.transform = `translateY(${distance}px)`
            index--
          }
        }
        // Swap Data
        newData = data.filter(item => item.id !== dragData.id)
        newData.splice(index, 0, dragData)
      })
    }

    function dragEnd() {
      document.onpointerup = null
      document.onpointermove = null
      setIsDragging(null)
      updateData(newData)
      if (!container) return
      container.removeChild(div)
      items.forEach(item => (item.style.transform = ''))
    }

    document.onpointermove = dragMove as any
    document.onpointerup = dragEnd as any
  }

  const updateData = (newData: DepartmentOperator[]) => {
    setData(newData)
  }

  return (
    <section className={styles.table}>
      <div className={styles.tableHeader}>
        <div className={styles.tableHeaderCell}>Priority</div>
        <div className={styles.tableHeaderCell}>Operator</div>
        <div className={styles.tableHeaderCell}></div>
      </div>
      <div className={styles.tableRowList} ref={containerRef}>
        {data.map((operator, index) => (
          <div
            className={classNames(styles.tableRow, { [styles.dragging]: isDragging === index })}
            key={operator.id}
            draggable
          >
            <div className={classNames(styles.tableCell, styles.tableCellPriority)}>{operator.priority}</div>
            <input
              className={classNames(styles.tableCell, styles.tableCellName)}
              type="text"
              value={operator.name}
              readOnly
            />
            <div className={classNames(styles.tableCell, styles.actionCell)} onPointerDown={e => dragStart(e, index)}>
              <span className={`${styles.moveIcon} moveIcon`}>
                <MoveIcon />
              </span>
              <span className={styles.trashButton} onClick={() => onOperatorDeselect(operator.id)}>
                <TrashIcon />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DepartmentOperatorsTable
