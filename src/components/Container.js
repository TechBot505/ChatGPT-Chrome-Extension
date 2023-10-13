import { forwardRef } from "react";
import clsx from "clsx";

const OuterContainer = forwardRef(function OuterContainer(
	{ className, children, ...props },
	ref
) {
	return (
		<div ref={ref} className={clsx("sm:px-8 bg-slate-900 py-2", className)} {...props}>
			<h1 className="text-center text-white text-lg font-bold">ChatGPT</h1>
			<div className="m-3 bg-slate-800 rounded">{children}</div>
		</div>
	);
});

const InnerContainer = forwardRef(function InnerContainer(
	{ className, children, ...props },
	ref
) {
	return (
		<div
			ref={ref}
			className={clsx(
				"flex-col bg-slate-800 m-3 space-y-5 min-w-[400px] min-h-[400px]",
				className
			)}
			{...props}
		>
			{children}
		</div>
	);
});

export const Container = forwardRef(function Container(
	{ children, ...props },
	ref
) {
	return (
		<OuterContainer ref={ref} {...props}>
			<InnerContainer>{children}</InnerContainer>
		</OuterContainer>
	);
});

Container.Outer = OuterContainer;
Container.Inner = InnerContainer;