import {
  trigger,
  transition,
  query,
  style,
  stagger,
  animate,
} from '@angular/animations';

export const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(
      ':enter',
      [
        style({ opacity: 0, transform: 'scale(0.6)' }),
        stagger(
          '150ms',
          animate(
            '500ms ease-out',
            style({ opacity: 1, transform: 'scale(1)' })
          )
        ),
      ],
      {
        optional: true,
      }
    ),
  ]),
]);
