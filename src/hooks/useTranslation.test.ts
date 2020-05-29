import useTranslation from './useTranslation'

test('useTranslation hook', () => {
    const { t } = useTranslation()

    expect(t).toBeTruthy()
})
