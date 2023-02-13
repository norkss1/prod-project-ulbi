import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}
export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames(cls['lds-dual-ring'], {}, [className])} />
);
