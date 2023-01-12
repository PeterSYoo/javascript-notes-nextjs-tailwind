import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const ComponentRenderLifeCycleMD = () => {
  const c1 = ``;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;In React, the component render life cycle is the sequence of steps
        that a component goes through from the moment it is created to the
        moment it is destroyed.&quot;
      </p>
      <p>
        Imagine that you are a farmer responsible for growing a crop of
        vegetables. To grow a successful crop, you must follow a series of steps
        from start to finish.
      </p>
      <p>
        First, you must prepare the soil by tilling it, adding fertilizers and
        other nutrients, and ensuring that it is well-drained. Next, you must
        plant the seeds or seedlings in the soil, being careful to follow the
        correct spacing and depth guidelines.
      </p>
      <p>
        After planting, you must water and fertilize the soil regularly to keep
        the plants healthy and promote growth. As the plants mature, you must
        also keep an eye out for pests and diseases, and take steps to control
        them if necessary.
      </p>
      <p>
        Finally, when the vegetables are ripe and ready to be harvested, you
        must carefully pluck them from the plants and prepare them for sale or
        consumption.
      </p>
      <p>
        In React, the component render life cycle is similar to the process of
        growing a crop of vegetables. Just as there are many steps involved in
        growing a crop from start to finish, there are also many steps involved
        in a component&apos;s life cycle, from the moment it is created to the
        moment it is destroyed.
      </p>
      <p>
        Here is a summary of the steps in a component&apos;s render life cycle:
      </p>
      <ul className="list-disc ml-5">
        <li>
          Mounting: The component is created and rendered to the DOM for the
          first time.
        </li>
        <li>
          Updating: The component&apos;s state or props have changed, and the
          component needs to re-render itself to reflect the changes.
          Unmounting: The component is removed from the DOM.
        </li>
      </ul>
      <p>
        Overall, the component render life cycle in React is the sequence of
        steps that a component goes through from the moment it is created to the
        moment it is destroyed. It involves mounting the component to the DOM,
        updating the component when its state or props change, and unmounting
        the component when it is no longer needed.
      </p>
    </>
  );
};
