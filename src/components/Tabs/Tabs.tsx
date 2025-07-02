interface TabsProps<T> {
  items: T[];
  selectedItem: T;
  onSelect: (item: T) => void;
  getKey: (item: T) => string;
  renderButtonContent?: (item: T, index: number) => React.ReactNode;
  className?: string;
  buttonClassName?: string;
  activeClassName?: string;
}

export default function Tabs<T>({
  items,
  selectedItem,
  onSelect,
  getKey,
  renderButtonContent,
  className = '',
  buttonClassName = '',
  activeClassName = '',
}: TabsProps<T>) {
  return (
    <div className={className}>
      {items.map((item, index) => {
        const isActive = getKey(item) === getKey(selectedItem);
        return (
          <button
            key={getKey(item)}
            className={`${buttonClassName} ${isActive ? activeClassName : ''}`}
            onClick={() => onSelect(item)}
          >
            {renderButtonContent ? renderButtonContent(item, index) : null}
          </button>
        );
      })}
    </div>
  );
}