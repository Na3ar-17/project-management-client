export const sortColumnList = ({
  sourceCol,
  startIndex,
  endIndex,
}: {
  sourceCol: any
  startIndex: number
  endIndex: number
}) => {
  const newTaskIndexs = Array.from(sourceCol.operatorsIds)
  const [removed] = newTaskIndexs.splice(startIndex, 1)
  newTaskIndexs.splice(endIndex, 0, removed)

  const newColumn = {
    ...sourceCol,
    operatorsIds: newTaskIndexs,
  }

  return newColumn
}
