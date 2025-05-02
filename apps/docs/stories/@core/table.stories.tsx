import { Meta, StoryObj } from '@storybook/react';
import { Table } from '@tripie-pyotato/design-system/@core';
import { useAppTheme } from '@tripie-pyotato/design-system/@hooks';

const meta: Meta<typeof Table> = {
  title: 'tripie-design@core/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '<table> 표 컴포넌트. columns 와 rowData 프롭스로 기본 표를 생성하거나, 커스터마이징을 하기 위해 `<Table.Head/>`, `<Table.Row/>`, `<Table.Cell/>`, `<Table.Body/>`, `<Table.Data/>`를 조합하여 생성할 수 있습니다.',
      },
    },
  },
  decorators: [
    (story, context) => {
      const { mode } = useAppTheme();
      context.globals.theme = mode;
      return <div className={`${mode}`}>{story()}</div>;
    },
  ],
  args: {
    alignTableHeaderNames: 'center',
    alignTableData: 'center',
    justifyTableHeadrNames: 'start',
    justifyTableData: 'start',
    isStriped: false,
    cellWidths: [20, 20, 20, 20, 20],
    borderMode: 'none',
  },
  argTypes: {
    borderMode: {
      options: ['none', 'all', 'inner', 'outer', 'horizontal', 'vertical'],
      control: { type: 'radio' },
      table: {
        type: {
          summary: "'none' | 'all' | 'inner' | 'outer' | 'horizontal' | 'vertical'",
        },
        defaultValue: { summary: 'none' },
      },
    },
    isStriped: {
      options: ['true', 'false'],
      control: { type: 'boolean' },
      table: {
        type: {
          summary: "'true' | 'false'",
          detail: 'true로 설정 시 홀수 row 색상을 대비할 수 있습니다.',
        },
        defaultValue: { summary: 'false' },
      },
    },
    cellWidths: {
      control: {
        type: 'object',
      },
      table: {
        type: {
          summary: 'number[] | null',
        },
        defaultValue: {
          summary: 'null',
        },
      },
    },
    alignTableHeaderNames: {
      options: ['normal', 'center', 'start', 'stretch', 'end'],
      control: { type: 'radio' },
      table: {
        type: {
          summary: "'normal' | 'center' | 'start' | 'stretch' | 'end'",
        },
        defaultValue: { summary: 'center' },
      },
    },
    alignTableData: {
      options: ['normal', 'center', 'start', 'stretch', 'end'],
      control: { type: 'radio' },
      table: {
        type: {
          summary: "'normal' | 'center' | 'start' | 'stretch' | 'end'",
        },
        defaultValue: { summary: 'center' },
      },
    },
    justifyTableData: {
      control: { type: 'radio' },
      options: ['center', 'normal', 'stretch', 'space-evenly', 'space-around', 'space-between'],
      table: {
        type: {
          summary: "'center' | 'normal' | 'stretch' | 'space-evenly' | 'space-around' | 'space-between'",
        },
        defaultValue: { summary: 'start' },
      },
    },
    justifyTableHeadrNames: {
      control: { type: 'radio' },
      options: ['center', 'normal', 'stretch', 'space-evenly', 'space-around', 'space-between'],
      table: {
        type: {
          summary: "'center' | 'normal' | 'stretch' | 'space-evenly' | 'space-around' | 'space-between'",
        },
        defaultValue: { summary: 'start' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  render: args => {
    const rowData = [
      { 'Dessert (100g serving)': 'Frozen yoghurt', Calories: 159, 'Fat (g)': 6, 'Carbs (g)': 24, 'Protein (g)': 4 },
      {
        'Dessert (100g serving)': 'Ice cream sandwich',
        Calories: 237,
        'Fat (g)': 37,
        'Carbs (g)': 24,
        'Protein (g)': 4.3,
      },
      { 'Dessert (100g serving)': 'Eclair', Calories: 262, 'Fat (g)': 16, 'Carbs (g)': 24, 'Protein (g)': 6 },
    ];
    const columms = [
      {
        field: 'Dessert (100g serving)',
        headerName: 'Dessert (100g serving)',
        width: 30,
      },
      {
        field: 'Calories',
        headerName: 'Calories',
        width: 20,
      },
      {
        field: 'Fat (g)',
        headerName: 'Fat (g)',
        width: 20,
      },
      {
        field: 'Carbs (g)',
        headerName: 'Carbs (g)',
        width: 15,
      },
      {
        field: 'Protein (g)',
        headerName: 'Protein (g)',
        width: 15,
      },
    ];
    return <Table {...args} columns={columms} rowData={rowData}></Table>;
  },
};

export const Custom: Story = {
  name: 'Custom',
  render: args => (
    <Table {...args}>
      <Table.Head>
        <Table.Row>
          <Table.Cell>Dessert (100g serving)</Table.Cell>
          <Table.Cell>Calories</Table.Cell>
          <Table.Cell>Fat (g)</Table.Cell>
          <Table.Cell>Carbs (g)</Table.Cell>
          <Table.Cell>Protein (g)</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Frozen yoghurt</Table.Cell>
          <Table.Data>159</Table.Data>
          <Table.Data>6</Table.Data>
          <Table.Data>24</Table.Data>
          <Table.Data>4</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Ice cream sandwich</Table.Cell>
          <Table.Data>237</Table.Data>
          <Table.Data>9</Table.Data>
          <Table.Data>37</Table.Data>
          <Table.Data>4.3</Table.Data>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Eclair</Table.Cell>
          <Table.Data>262</Table.Data>
          <Table.Data>16</Table.Data>
          <Table.Data>24</Table.Data>
          <Table.Data>6</Table.Data>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};
