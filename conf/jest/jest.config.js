{
    // "verbose": true,
    "testRegex": "/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$",
    "coverageDirectory": "build/__coverage__",
    "coverageReporters": ["html"],
    "moduleFileExtensions": [
        "js", "jsx", "json"
    ],
    "moduleDirectories": ["node_modules"],
    "modulePathIgnorePatterns": [
            "node_modules",
            "build",
            "lib"
    ],
    "modulePaths": [
        "test/unit",
        "test/unit/components"
    ]
}
