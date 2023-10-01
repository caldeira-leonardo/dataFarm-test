export function filterData(datas: any[], input: string) {
  return datas.filter((data: any) => {
    return (
      data.subtitle.toLowerCase().includes(input.toLowerCase()) ||
      data.title.toLowerCase().includes(input.toLowerCase())
    );
  });
}
