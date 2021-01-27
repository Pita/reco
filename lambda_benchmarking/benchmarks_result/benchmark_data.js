const benchmarkData = {
  "basic_features/char_backtracking": "4.03",
  "basic_features/char_backtracking_greddy_quantifier_max": "1.08",
  "basic_features/char_backtracking_greddy_quantifier_max_complex": "1.36",
  "basic_features/char_backtracking_greedy_quantifier_min": "1.15",
  "basic_features/char_backtracking_greedy_quantifier_min_and_max": "0.55",
  "basic_features/char_backtracking_greedy_quantifier_min_and_max_complex": "2.48",
  "basic_features/char_backtracking_greedy_quantifier_min_complex": "1.67",
  "basic_features/char_backtracking_lazy_quantifier_max": "2.18",
  "basic_features/char_backtracking_lazy_quantifier_max_complex": "3.19",
  "basic_features/char_backtracking_lazy_quantifier_min": "3.29",
  "basic_features/char_backtracking_lazy_quantifier_min_and_max": "1.02",
  "basic_features/char_backtracking_lazy_quantifier_min_and_max_complex": "2.46",
  "basic_features/char_backtracking_lazy_quantifier_min_complex": "2.54",
  "basic_features/char_class_any": "0.46",
  "basic_features/char_class_digit": "0.54",
  "basic_features/char_class_digit_negated": "0.39",
  "basic_features/char_class_space": "0.49",
  "basic_features/char_class_space_negated": "0.40",
  "basic_features/char_class_word": "0.41",
  "basic_features/char_class_word_negated": "0.49",
  "basic_features/char_disjunction": "0.67",
  "basic_features/char_non_greedy_backtracking": "1.26",
  "basic_features/char_non_greedy_min": "0.62",
  "basic_features/char_quantifier": "2.50",
  "basic_features/char_sets": "0.65",
  "basic_features/char_sets_ignoreCase": "0.77",
  "basic_features/char_sets_invert": "0.58",
  "basic_features/char_sets_quantifier": "2.70",
  "basic_features/dot_matchall": "0.44",
  "basic_features/end_anchor": "0.57",
  "basic_features/end_anchor_multiline": "0.86",
  "basic_features/end_anchor_optional": "2.18",
  "basic_features/group_backreference": "2.13",
  "basic_features/group_backtracking": "2.16",
  "basic_features/groups_disjunctions": "1.03",
  "basic_features/groups_disjunctions_backtracking": "0.85",
  "basic_features/groups_non_capturing": "0.86",
  "basic_features/groups_quantifiers": "1.20",
  "basic_features/groups_simple": "0.88",
  "basic_features/lookahead_negative": "0.68",
  "basic_features/lookahead_positive": "0.71",
  "basic_features/lookbehind_negative": "0.54",
  "basic_features/lookbehind_positive": "0.48",
  "basic_features/non_greedy_star_match": "1.11",
  "basic_features/non_word_boundry": "0.78",
  "basic_features/set_backtracking": "2.58",
  "basic_features/single_chars": "0.53",
  "basic_features/single_chars_ignoreCase": "0.65",
  "basic_features/start_anchor": "0.48",
  "basic_features/start_anchor_multiline": "0.70",
  "basic_features/start_anchor_optional": "0.96",
  "basic_features/unicode_4byte": "0.81",
  "basic_features/unicode_any": "0.61",
  "basic_features/unicode_feature": "0.85",
  "basic_features/unicode_lookbehind": "0.75",
  "basic_features/word_boundry": "0.80",
  "basic_features/zero_length_assertion_end_anchored": "0.45",
  "common_regex/alphanumeric_with_space": "1.46",
  "common_regex/alphanumeric_without_space": "2.14",
  "common_regex/date_day_first_num": "6.19",
  "common_regex/date_day_first_str": "8.53",
  "common_regex/date_year_first_dash": "1.19",
  "common_regex/email1": "4.72",
  "common_regex/email2": "5.00",
  "common_regex/email3": "4.54",
  "common_regex/html_tag": "0.60",
  "common_regex/ipv4": "3.65",
  "common_regex/ipv4_and_ipv6": "6.46",
  "common_regex/ipv6": "19.99",
  "common_regex/js_handler": "6.62",
  "common_regex/js_handler_with_element": "1.63",
  "common_regex/numbers_decimal": "1.19",
  "common_regex/numbers_negative_positive_decimal": "4.50",
  "common_regex/numbers_whole": "0.84",
  "common_regex/numbers_whole_and_decimal": "1.93",
  "common_regex/numbers_whole_decimal_fractions": "3.58",
  "common_regex/password_complex": "6.09",
  "common_regex/password_moderate": "6.73",
  "common_regex/phone_number": "8.67",
  "common_regex/search_duplicates": "8.63",
  "common_regex/slug": "4.90",
  "common_regex/time_0_12h_optional_zero_ampm": "1.28",
  "common_regex/time_1_12h_optional_zero": "0.07",
  "common_regex/time_2_24h_zero": "0.91",
  "common_regex/time_3_24h_optional_zero": "2.21",
  "common_regex/time_4_24h_with_seconds": "0.89",
  "common_regex/url_http": "4.20",
  "common_regex/url_protocol_optional": "5.31",
  "common_regex/username": "1.17",
  "etherpad/ep_ops": "2.50"
};