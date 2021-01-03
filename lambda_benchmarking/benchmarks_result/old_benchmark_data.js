const oldBenchmarkData = {
  "basic_features/char_backtracking": "1.06",
  "basic_features/char_backtracking_greddy_quantifier_max": "0.27",
  "basic_features/char_backtracking_greddy_quantifier_max_complex": "0.81",
  "basic_features/char_backtracking_greedy_quantifier_min": "0.28",
  "basic_features/char_backtracking_greedy_quantifier_min_and_max": "0.21",
  "basic_features/char_backtracking_greedy_quantifier_min_and_max_complex": "0.61",
  "basic_features/char_backtracking_greedy_quantifier_min_complex": "2.32",
  "basic_features/char_backtracking_lazy_quantifier_max": "0.68",
  "basic_features/char_backtracking_lazy_quantifier_max_complex": "2.46",
  "basic_features/char_backtracking_lazy_quantifier_min": "0.56",
  "basic_features/char_backtracking_lazy_quantifier_min_and_max": "0.50",
  "basic_features/char_backtracking_lazy_quantifier_min_and_max_complex": "1.12",
  "basic_features/char_backtracking_lazy_quantifier_min_complex": "2.38",
  "basic_features/char_class_any": "0.18",
  "basic_features/char_class_digit": "0.15",
  "basic_features/char_class_digit_negated": "0.19",
  "basic_features/char_class_space": "0.17",
  "basic_features/char_class_space_negated": "0.20",
  "basic_features/char_class_word": "0.18",
  "basic_features/char_class_word_negated": "0.15",
  "basic_features/char_disjunction": "0.27",
  "basic_features/char_non_greedy_backtracking": "0.55",
  "basic_features/char_non_greedy_min": "0.20",
  "basic_features/char_quantifier": "0.62",
  "basic_features/char_sets": "0.19",
  "basic_features/char_sets_ignoreCase": "0.33",
  "basic_features/char_sets_invert": "0.16",
  "basic_features/char_sets_quantifier": "0.75",
  "basic_features/dot_matchall": "0.16",
  "basic_features/end_anchor": "0.29",
  "basic_features/end_anchor_multiline": "0.44",
  "basic_features/end_anchor_optional": "0.76",
  "basic_features/group_backreference": "1.09",
  "basic_features/group_backtracking": "1.61",
  "basic_features/groups_disjunctions": "0.28",
  "basic_features/groups_disjunctions_backtracking": "0.35",
  "basic_features/groups_non_capturing": "0.36",
  "basic_features/groups_quantifiers": "0.41",
  "basic_features/groups_simple": "0.49",
  "basic_features/lookahead_negative": "0.24",
  "basic_features/lookahead_positive": "0.51",
  "basic_features/lookbehind_negative": "0.17",
  "basic_features/lookbehind_positive": "0.29",
  "basic_features/non_greedy_star_match": "0.38",
  "basic_features/non_word_boundry": "0.47",
  "basic_features/set_backtracking": "0.99",
  "basic_features/single_chars": "0.34",
  "basic_features/single_chars_ignoreCase": "0.35",
  "basic_features/start_anchor": "0.28",
  "basic_features/start_anchor_multiline": "0.38",
  "basic_features/start_anchor_optional": "0.62",
  "basic_features/unicode_4byte": "0.41",
  "basic_features/unicode_any": "0.30",
  "basic_features/unicode_feature": "0.46",
  "basic_features/unicode_lookbehind": "0.33",
  "basic_features/word_boundry": "0.42",
  "basic_features/zero_length_assertion_end_anchored": "0.07",
  "common_regex/alphanumeric_with_space": "0.66",
  "common_regex/alphanumeric_without_space": "0.45",
  "common_regex/date_day_first_num": "2.84",
  "common_regex/date_day_first_str": "3.66",
  "common_regex/date_year_first_dash": "0.82",
  "common_regex/email1": "2.08",
  "common_regex/email2": "1.94",
  "common_regex/email3": "1.51",
  "common_regex/html_tag": "0.55",
  "common_regex/ipv4": "0.33",
  "common_regex/ipv4_and_ipv6": "1.84",
  "common_regex/ipv6": "3.19",
  "common_regex/js_handler": "1.33",
  "common_regex/js_handler_with_element": "0.90",
  "common_regex/numbers_decimal": "0.40",
  "common_regex/numbers_negative_positive_decimal": "0.55",
  "common_regex/numbers_whole": "0.31",
  "common_regex/numbers_whole_and_decimal": "0.40",
  "common_regex/numbers_whole_decimal_fractions": "1.17",
  "common_regex/password_complex": "2.40",
  "common_regex/password_moderate": "2.85",
  "common_regex/phone_number": "4.14",
  "common_regex/search_duplicates": "4.55",
  "common_regex/slug": "0.74",
  "common_regex/time_0_12h_optional_zero_ampm": "0.57",
  "common_regex/time_1_12h_optional_zero": "0.07",
  "common_regex/time_2_24h_zero": "0.45",
  "common_regex/time_3_24h_optional_zero": "0.31",
  "common_regex/time_4_24h_with_seconds": "0.45",
  "common_regex/url_http": "2.69",
  "common_regex/url_protocol_optional": "4.35",
  "common_regex/username": "0.67",
  "etherpad/ep_ops": "0.80"
};