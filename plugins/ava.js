'use strict';

module.exports = {
    plugins: [
        'ava'
    ],
    rules: {
        'ava/assertion-arguments': 2,
        'ava/assertion-message': 0,
        'ava/max-asserts': 0,
        'ava/no-cb-test': 0,
        'ava/no-identical-title': 2,
        'ava/no-ignored-test-files': 2,
        'ava/no-invalid-end': 2,
        'ava/no-only-test': 2,
        'ava/no-skip-assert': 2,
        'ava/no-skip-test': 2,
        'ava/no-statement-after-end': 2,
        'ava/no-todo-test': 2,
        'ava/no-unknown-modifiers': 2,
        'ava/prefer-power-assert': 0,
        'ava/test-ended': 2,
        'ava/test-title': [2, 'if-multiple'],
        'ava/use-t-well': 2,
        'ava/use-t': 2,
        'ava/use-test': 2,
        'ava/use-true-false': 2
    }
};